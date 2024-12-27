import type { Dispatch, ElementRef, FocusEventHandler, KeyboardEvent, PointerEventHandler, RefAttributes, SetStateAction } from "react";
import { createContext, forwardRef, useCallback, useContext, useId, useRef, useState } from "react";
import { SearchLg } from "@a-peak-works/untitledui-icons";
import { FocusScope, useFilter, useFocusManager } from "react-aria";
import type { ComboBoxProps as AriaComboBoxProps, ListBoxProps as AriaListBoxProps, Key } from "react-aria-components";
import {
    Button as AriaButton,
    ComboBox as AriaComboBox,
    Group as AriaGroup,
    Input as AriaInput,
    ListBox as AriaListBox,
    ComboBoxStateContext,
} from "react-aria-components";
import { useHotkeys } from "react-hotkeys-hook";
import type { ListData } from "react-stately";
import { useListData } from "react-stately";
import { cx } from "@/components/utils";
import { useResizeObserver } from "@/hooks/use-resize-observer";
import { Avatar } from "../avatar/avatar";
import type { IconComponentType } from "../badges/badge-types";
import HintText from "../inputs/hint-text";
import Label from "../inputs/label";
import { CloseButton } from "../tags/tags";
import type { SelectValueType } from "./input-dropdown";
import { Popover } from "./input-dropdown";
import ListBoxItem from "./listbox-item";

interface ComboBoxValueProps {
    size: "sm" | "md";
    shortcut?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    shortcutClassName?: string;
    placeholderIcon?: IconComponentType | null;
    onFocus?: FocusEventHandler;
    onPointerEnter?: PointerEventHandler;
}
const ComboboxContext = createContext<{
    size: "sm" | "md";
    selectedKeys: Key[];
    tagGroupIdentifier?: string;
    selectedItems: ListData<SelectValueType>;
    accessibleList: ListData<SelectValueType>;
    filter: (item: SelectValueType, filterText: string) => boolean;
    setFieldState: Dispatch<SetStateAction<{ selectedKey: Key | null; inputValue: string }>>;
    onRemove: (keys: Set<Key>) => void;
    onInputChange: (value: string) => void;
    onSelectionChange: (id: Key | null) => void;
}>({
    size: "sm",
    selectedKeys: [],
    selectedItems: {} as ListData<SelectValueType>,
    accessibleList: {} as ListData<SelectValueType>,
    filter: () => true,
    setFieldState: () => {},
    onRemove: () => {},
    onInputChange: () => {},
    onSelectionChange: () => {},
});

interface CommonProps {
    hint?: string;
    label?: string;
    tooltip?: string;
    size?: "sm" | "md";
    placeholder?: string;
}

interface ComboBoxProps extends Omit<AriaComboBoxProps<SelectValueType>, "children" | "items">, RefAttributes<HTMLDivElement>, CommonProps {
    shortcut?: boolean;
    items?: SelectValueType[];
    popoverClassName?: string;
    shortcutClassName?: string;
    selectedItems: ListData<SelectValueType>;
    placeholderIcon?: IconComponentType | null;
    children: AriaListBoxProps<SelectValueType>["children"];
    onItemCleared?: (key: Key) => void;
    onItemInserted?: (key: Key) => void;
}

export const ComboBox = forwardRef<ElementRef<typeof AriaComboBox>, ComboBoxProps>(
    ({ name, items, children, className, size = "sm", selectedItems, onItemCleared, onItemInserted, shortcut, placeholder = "Search", ...props }, ref) => {
        const tagGroupIdentifier = useId();
        const { contains } = useFilter({ sensitivity: "base" });
        const selectedKeys = selectedItems.items.map((i) => i?.value);

        const filter = useCallback(
            (item: SelectValueType, filterText: string) => {
                return !selectedKeys.includes(item.value) && contains(item.value, filterText);
            },
            [contains, selectedKeys],
        );

        const accessibleList = useListData({
            initialItems: items,
            filter,
        });

        const [fieldState, setFieldState] = useState<{
            selectedKey: Key | null;
            inputValue: string;
        }>({
            selectedKey: null,
            inputValue: "",
        });

        const onRemove = useCallback(
            (keys: Set<Key>) => {
                const key = keys.values().next().value;

                if (!key) return;

                selectedItems.remove(key);
                onItemCleared?.(key);
            },
            [selectedItems, onItemCleared],
        );

        const onSelectionChange = (id: Key | null) => {
            if (!id) {
                return;
            }

            const item = accessibleList.getItem(id);

            if (!item) {
                return;
            }

            if (!selectedKeys.includes(id as string)) {
                selectedItems.append(item);
                setFieldState({
                    inputValue: "",
                    selectedKey: id,
                });
                onItemInserted?.(id);
            }

            accessibleList.setFilterText("");
        };

        const onInputChange = (value: string) => {
            setFieldState((prev) => ({
                inputValue: value,
                selectedKey: value === "" ? null : prev.selectedKey,
            }));

            accessibleList.setFilterText(value);
        };

        const placeholderRef = useRef<HTMLDivElement>(null);
        const [popoverWidth, setPopoverWidth] = useState("");

        // Resize observer for popover width
        const onResize = useCallback(() => {
            if (!placeholderRef.current) return;
            let divRect = placeholderRef.current?.getBoundingClientRect();
            setPopoverWidth(divRect.width + "px");
        }, [placeholderRef, setPopoverWidth]);

        useResizeObserver({
            ref: placeholderRef,
            onResize: onResize,
            box: "border-box",
        });

        return (
            <ComboboxContext.Provider
                value={{
                    size,
                    filter,
                    onRemove,
                    selectedKeys,
                    onInputChange,
                    selectedItems,
                    setFieldState,
                    accessibleList,
                    onSelectionChange,
                    tagGroupIdentifier,
                }}
            >
                <AriaComboBox
                    ref={ref}
                    menuTrigger="focus"
                    items={accessibleList.items}
                    onInputChange={onInputChange}
                    inputValue={fieldState.inputValue}
                    selectedKey={fieldState.selectedKey}
                    onSelectionChange={onSelectionChange}
                    {...props}
                >
                    {(state) => (
                        <div className="flex flex-col gap-md">
                            {props.label && (
                                <Label {...state} className="-mb-0.5" tooltip={props.tooltip}>
                                    {props.label}
                                </Label>
                            )}

                            <ComboBoxTagsValue
                                size={size}
                                shortcut={shortcut}
                                ref={placeholderRef}
                                placeholder={placeholder}
                                // This is a workaround to correctly calculating the trigger width
                                // while using ResizeObserver wasn't 100% reliable.
                                onFocus={onResize}
                                onPointerEnter={onResize}
                                {...state}
                                {...props}
                            />

                            <Popover size={"md"} triggerRef={placeholderRef} style={{ width: popoverWidth }} className={props?.popoverClassName}>
                                <AriaListBox selectionMode="multiple" className="size-full outline-none">
                                    {children}
                                </AriaListBox>
                            </Popover>

                            {props.hint && (
                                <HintText slot="description" {...state}>
                                    {props.hint}
                                </HintText>
                            )}
                        </div>
                    )}
                </AriaComboBox>
            </ComboboxContext.Provider>
        );
    },
);

const sizes = {
    sm: { root: "py-2 px-3", shortcut: "pr-2.5" },
    md: { root: "py-2.5 px-3.5", shortcut: "pr-3" },
};

const InnerComboBox = ({ isDisabled, shortcut, shortcutClassName, placeholder }: ComboBoxValueProps) => {
    const focusManager = useFocusManager();
    const selectContext = useContext(ComboboxContext);

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const isCaretAtStart = event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd === 0;

        if (!isCaretAtStart && event.currentTarget.value !== "") {
            return;
        }

        switch (event.key) {
            case "Backspace":
            case "ArrowLeft":
                focusManager?.focusPrevious({ wrap: false, tabbable: true });
                break;
            case "ArrowRight":
                focusManager?.focusNext({ wrap: false, tabbable: true });
                break;
        }
    };

    const handleTagKeyDown = (event: KeyboardEvent<HTMLButtonElement>, value: Key) => {
        event.preventDefault();
        event.stopPropagation();

        const isFirstTag = selectContext?.selectedItems?.items?.[0]?.value === value;

        switch (event.key) {
            case " ":
            case "Enter":
            case "Backspace":
                if (isFirstTag) {
                    focusManager?.focusNext({ wrap: false, tabbable: true });
                } else {
                    focusManager?.focusPrevious({ wrap: false, tabbable: true });
                }

                selectContext.onRemove(new Set([value]));
                break;

            case "ArrowLeft":
                focusManager?.focusPrevious({ wrap: false, tabbable: true });
                break;
            case "ArrowRight":
                focusManager?.focusNext({ wrap: false, tabbable: true });
                break;
        }
    };

    const isSelectionEmpty = selectContext?.selectedItems?.items?.length === 0;

    return (
        <div className="relative flex w-full flex-1 flex-row flex-wrap items-center justify-start gap-sm">
            {!isSelectionEmpty &&
                selectContext?.selectedItems?.items?.map((value) => (
                    <span key={value.value} className="flex items-center rounded-md bg-primary py-xxs pl-[5px] pr-xs ring-1 ring-inset ring-border-primary">
                        <Avatar size="xxs" alt={value?.label} src={value?.avatarUrl} />

                        <p className="ml-[5px] select-none truncate whitespace-nowrap text-secondary tt-sm-md">{value?.label}</p>

                        <CloseButton
                            size="md"
                            isDisabled={isDisabled}
                            className="ml-[3px]"
                            // For workaround, onKeyDown is added to the button
                            onKeyDown={(event) => handleTagKeyDown(event, value.value)}
                            onClick={(event) => {
                                event.stopPropagation();
                                event.preventDefault();

                                selectContext.onRemove(new Set([value.value]));
                            }}
                        />
                    </span>
                ))}

            <div className={cx("relative flex min-w-[20%] flex-1 flex-row items-center", !isSelectionEmpty && "ml-0.5", shortcut && "min-w-[30%]")}>
                <AriaInput
                    placeholder={placeholder}
                    onKeyDown={handleInputKeyDown}
                    className="w-full flex-[1_0_0] appearance-none text-ellipsis bg-transparent text-primary caret-alpha-black/90 tt-md placeholder:text-placeholder focus:outline-none disabled:cursor-not-allowed disabled:text-disabled disabled:placeholder:text-disabled"
                />

                {shortcut && (
                    <div
                        aria-hidden="true"
                        className={cx(
                            "absolute inset-y-0.5 right-0.5 z-10 flex items-center rounded-r-[inherit] bg-gradient-to-r from-transparent to-bg-primary to-40% pl-8",
                            shortcutClassName,
                        )}
                    >
                        <span
                            className={cx(
                                "pointer-events-none select-none rounded px-xs py-px text-quaternary ring-1 ring-inset ring-border-secondary tt-xs-md",
                                isDisabled && "bg-transparent text-disabled",
                            )}
                        >
                            ⌘K
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export const ComboBoxTagsValue = forwardRef<ElementRef<typeof AriaGroup>, ComboBoxValueProps>(
    ({ size, isDisabled, shortcut, placeholder, shortcutClassName, placeholderIcon: Icon = SearchLg, ...otherProps }, ref) => {
        const state = useContext(ComboBoxStateContext);

        useHotkeys("meta+k", () => state?.setOpen(true), { enabled: !isDisabled && shortcut });

        return (
            <AriaGroup
                ref={ref}
                {...otherProps}
                className={({ isFocusWithin, isDisabled }) =>
                    cx(
                        "relative flex w-full items-center gap-md rounded-lg bg-primary shadow-xs outline-none ring-1 ring-inset ring-border-primary transition duration-200 ease-in-out",
                        isDisabled && "cursor-not-allowed bg-disabled_subtle",
                        isFocusWithin && "ring-2 ring-border-brand",
                        sizes[size].root,
                    )
                }
            >
                {Icon && (
                    <AriaButton>
                        <Icon className="size-5 text-fg-quaternary" />
                    </AriaButton>
                )}

                <FocusScope contain={false} autoFocus={false} restoreFocus={false}>
                    <InnerComboBox size={size} isDisabled={isDisabled} shortcut={shortcut} shortcutClassName={shortcutClassName} placeholder={placeholder} />
                </FocusScope>
            </AriaGroup>
        );
    },
);

const MultipleSelect = ComboBox as typeof ComboBox & {
    Option: typeof ListBoxItem;
};

MultipleSelect.Option = ListBoxItem;

export { MultipleSelect };
