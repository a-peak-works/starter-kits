import type { ElementRef, FocusEventHandler, PointerEventHandler, ReactNode, RefAttributes } from "react";
import { createContext, forwardRef, useCallback, useContext, useRef, useState } from "react";
import { ChevronDown, SearchLg as SearchIcon, User01 } from "@a-peak-works/untitledui-icons";
import type {
    ComboBoxProps as AriaComboBoxProps,
    ListBoxProps as AriaListBoxProps,
    PopoverProps as AriaPopoverProps,
    SelectProps as AriaSelectProps,
} from "react-aria-components";
import {
    Button as AriaButton,
    ComboBox as AriaComboBox,
    Group as AriaGroup,
    Input as AriaInput,
    ListBox as AriaListBox,
    Popover as AriaPopover,
    Select as AriaSelect,
    SelectValue as AriaSelectValue,
    ComboBoxStateContext,
} from "react-aria-components";
import { useHotkeys } from "react-hotkeys-hook";
import Dot from "@/components/foundations/dot-icon";
import { cx } from "@/components/utils";
import { useResizeObserver } from "@/hooks/use-resize-observer";
import { Avatar } from "../avatar/avatar";
import type { IconComponentType } from "../badges/badge-types";
import HintText from "../inputs/hint-text";
import Label from "../inputs/label";
import type { ListBoxItemIconProps } from "./listbox-item";
import ListBoxItem from "./listbox-item";
import { ComboBoxTagsValue } from "./multiple-select";

export type SelectValueType = {
    label: string;
    value: string;
    avatarUrl?: string;
    isDisabled?: boolean;
    supportingText?: string;
    icon?: IconComponentType;
};

interface PopoverProps extends AriaPopoverProps, RefAttributes<HTMLElement> {
    size: "sm" | "md";
}

export const Popover = forwardRef<ElementRef<typeof AriaPopover>, PopoverProps>((props, ref) => {
    return (
        <AriaPopover
            ref={ref}
            placement="bottom"
            containerPadding={0}
            offset={4}
            {...props}
            className={(states) =>
                cx(
                    "!max-h-64 w-[--trigger-width] overflow-y-auto overflow-x-hidden rounded-lg bg-primary py-xs shadow-lg outline-none ring-1 ring-inset ring-border-secondary will-change-transform",

                    // scrollbar styles
                    // "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-alpha-black/15 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-primary [&::-webkit-scrollbar]:w-2",

                    states.isEntering &&
                        "duration-300 ease-out animate-in fade-in placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2",

                    states.isExiting &&
                        "duration-150 ease-in animate-out fade-out placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2",

                    props.size === "md" && "!max-h-80",

                    typeof props.className === "function" ? props.className(states) : props.className,
                )
            }
        />
    );
});

type Types = "default" | "iconLeading" | "avatarLeading" | "dotLeading" | "search" | "tags";
type SelectTypes = "default" | "iconLeading" | "avatarLeading" | "dotLeading";
type ComboBoxTypes = "search" | "tags";

interface CommonProps {
    hint?: string;
    label?: string;
    tooltip?: string;
    size?: "sm" | "md";
    placeholder?: string;
}

interface SelectProps extends Omit<AriaSelectProps<SelectValueType>, "children" | "items">, RefAttributes<HTMLDivElement>, CommonProps {
    type?: SelectTypes;
    items?: SelectValueType[];
    popoverClassName?: string;
    placeholderIcon?: IconComponentType;
    children: ReactNode | ((item: SelectValueType) => ReactNode);
}

interface SelectValueProps {
    isOpen: boolean;
    size: "sm" | "md";
    type: SelectTypes;
    isFocused: boolean;
    isDisabled: boolean;
    placeholder?: string;
    placeholderIcon?: IconComponentType;
}

const sizes = {
    sm: { root: "py-2 px-3", shortcut: "pr-2.5" },
    md: { root: "py-2.5 px-3.5", shortcut: "pr-3" },
};

const selectIcons = {
    default: () => <></>,
    avatarLeading: (props: ListBoxItemIconProps) => (
        <User01 aria-hidden="true" className={cx("size-5 shrink-0 text-fg-quaternary", props.isDisabled && "text-fg-disabled")} />
    ),
    iconLeading: ({ icon: Icon = User01, ...props }: ListBoxItemIconProps) => (
        <Icon aria-hidden="true" className={cx("size-5 shrink-0 text-fg-quaternary", props.isDisabled && "text-fg-disabled")} />
    ),
    dotLeading: ({ icon: Icon, ...props }: ListBoxItemIconProps) =>
        Icon ? (
            <Icon aria-hidden="true" className={cx("flex size-min shrink-0 text-fg-success-secondary", props.isDisabled && "text-fg-disabled_subtle")} />
        ) : (
            <Dot size="md" className={cx("flex size-min shrink-0 text-fg-success-secondary", props.isDisabled && "text-fg-disabled_subtle")} />
        ),
};

const SelectValue = forwardRef<ElementRef<typeof AriaButton>, SelectValueProps>((props, ref) => {
    const Icon = selectIcons[props.type];

    return (
        <AriaButton
            ref={ref}
            className={cx(
                "relative flex w-full cursor-pointer items-center rounded-lg bg-primary shadow-xs outline-none ring-1 ring-inset ring-border-primary transition duration-200 ease-in-out",
                (props.isFocused || props.isOpen) && "ring-2 ring-border-brand",
                props.isDisabled && "cursor-not-allowed bg-disabled_subtle text-disabled",
            )}
        >
            <AriaSelectValue className={cx("flex h-max w-full items-center justify-start gap-md truncate text-left align-middle", sizes[props.size].root)}>
                {(state: { selectedItem: SelectValueType | null }) => (
                    <>
                        {state?.selectedItem?.avatarUrl ? (
                            <Avatar size="xs" src={state.selectedItem.avatarUrl} alt={state.selectedItem.label} />
                        ) : (
                            <Icon {...state?.selectedItem} icon={state?.selectedItem?.icon || props.placeholderIcon} {...props} />
                        )}

                        {state.selectedItem ? (
                            <section className="flex w-full gap-md truncate">
                                <p className="truncate text-primary tt-md-md">{state.selectedItem?.label}</p>
                                {state.selectedItem?.supportingText && <p className="text-tertiary tt-md">{state.selectedItem?.supportingText}</p>}
                            </section>
                        ) : (
                            <p className={cx("text-placeholder tt-md", props.isDisabled && "text-disabled")}>{props.placeholder}</p>
                        )}

                        <ChevronDown size={20} aria-hidden="true" className="ml-auto shrink-0 text-fg-quaternary" />
                    </>
                )}
            </AriaSelectValue>
        </AriaButton>
    );
});

export const SelectContext = createContext<{ type: Types; size: "sm" | "md" }>({ type: "default", size: "sm" });

export const Select = forwardRef<ElementRef<typeof AriaSelect>, SelectProps>(
    ({ type = "default", placeholder = "Select", placeholderIcon, size = "sm", children, items, label, hint, tooltip, ...rest }, ref) => {
        const itemsWithId = items?.map((item) => ({ ...item, id: item.value }));

        return (
            <SelectContext.Provider value={{ type, size }}>
                <AriaSelect ref={ref} {...rest}>
                    {(state) => (
                        <div className="flex flex-col gap-md">
                            {label && (
                                <Label {...state} className="-mb-0.5" tooltip={tooltip}>
                                    {label}
                                </Label>
                            )}

                            <SelectValue
                                {...state}
                                {...{ type, size, placeholder }}
                                placeholderIcon={type === "avatarLeading" || type === "iconLeading" ? placeholderIcon || User01 : undefined}
                            />

                            <Popover size={size} className={rest.popoverClassName}>
                                <AriaListBox items={itemsWithId} className="size-full outline-none">
                                    {children}
                                </AriaListBox>
                            </Popover>

                            {hint && <HintText {...state}>{hint}</HintText>}
                        </div>
                    )}
                </AriaSelect>
            </SelectContext.Provider>
        );
    },
);

interface ComboBoxProps extends Omit<AriaComboBoxProps<SelectValueType>, "children" | "items">, RefAttributes<HTMLDivElement>, CommonProps {
    shortcut?: boolean;
    type?: ComboBoxTypes;
    items?: SelectValueType[];
    popoverClassName?: string;
    shortcutClassName?: string;
    children: AriaListBoxProps<SelectValueType>["children"];
}

interface ComboBoxValueProps {
    size: "sm" | "md";
    shortcut: boolean;
    isDisabled: boolean;
    placeholder?: string;
    shortcutClassName?: string;
    onFocus?: FocusEventHandler;
    onPointerEnter?: PointerEventHandler;
}

const ComboBoxValue = forwardRef<ElementRef<typeof AriaGroup>, ComboBoxValueProps>(
    ({ size, isDisabled, shortcut, placeholder, shortcutClassName, ...otherProps }, ref) => {
        const state = useContext(ComboBoxStateContext);

        const value = state?.selectedItem?.value || null;
        const inputValue = state?.inputValue || null;

        const first = inputValue?.split(value?.supportingText)?.[0] || "";
        const last = inputValue?.split(first)[1];

        useHotkeys("meta+k", () => state?.setOpen(true), { enabled: !isDisabled && shortcut });

        return (
            <AriaGroup
                ref={ref}
                {...otherProps}
                className={({ isFocusWithin, isDisabled }) =>
                    cx(
                        "relative flex w-full items-center gap-md rounded-lg bg-primary shadow-xs outline-none ring-1 ring-inset ring-border-primary transition-shadow duration-200 ease-in-out",
                        isDisabled && "cursor-not-allowed bg-disabled_subtle",
                        isFocusWithin && "ring-2 ring-border-brand",
                        sizes[size].root,
                    )
                }
            >
                <AriaButton>
                    <SearchIcon className="size-5 text-fg-quaternary" />
                </AriaButton>

                <div className="relative flex w-full items-center gap-md">
                    {inputValue && (
                        <span className="absolute top-1/2 z-0 inline-flex w-full -translate-y-1/2 gap-md truncate" aria-hidden="true">
                            <p className={cx("text-primary tt-md-md", isDisabled && "text-disabled")}>{first}</p>
                            {last && <p className={cx("-ml-[3px] text-tertiary tt-md", isDisabled && "text-disabled")}>{last}</p>}
                        </span>
                    )}
                    <AriaInput
                        placeholder={placeholder}
                        className="z-10 w-full appearance-none bg-transparent text-transparent caret-alpha-black/90 tt-md placeholder:text-placeholder focus:outline-none disabled:cursor-not-allowed disabled:text-disabled disabled:placeholder:text-disabled"
                    />
                </div>

                {shortcut && (
                    <div
                        className={cx(
                            "absolute inset-y-0.5 right-0.5 z-10 flex items-center rounded-r-[inherit] bg-gradient-to-r from-transparent to-bg-primary to-40% pl-8",
                            sizes[size].shortcut,
                            shortcutClassName,
                        )}
                    >
                        <span
                            className={cx(
                                "pointer-events-none select-none rounded px-xs py-px text-quaternary ring-1 ring-inset ring-border-secondary tt-xs-md",
                                isDisabled && "bg-transparent text-disabled",
                            )}
                            aria-hidden="true"
                        >
                            ⌘K
                        </span>
                    </div>
                )}
            </AriaGroup>
        );
    },
);

const comboboxPlaceholder = {
    search: ComboBoxValue,
    tags: ComboBoxTagsValue,
};

export const ComboBox = forwardRef<ElementRef<typeof AriaComboBox>, ComboBoxProps>(
    ({ type = "search", placeholder = "Select", shortcut = true, size = "sm", children, items, ...rest }, ref) => {
        const placeholderRef = useRef<HTMLDivElement>(null);
        const [popoverWidth, setPopoverWidth] = useState("");

        const ComboBoxValue = comboboxPlaceholder[type];

        const itemsWithId = items?.map((item) => ({ ...item, id: item.value }));

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
            <SelectContext.Provider value={{ type, size }}>
                <AriaComboBox ref={ref} menuTrigger="focus" {...rest}>
                    {(state) => (
                        <div className="flex flex-col gap-md">
                            {rest.label && (
                                <Label {...state} className="-mb-0.5" tooltip={rest.tooltip}>
                                    {rest.label}
                                </Label>
                            )}

                            <ComboBoxValue
                                ref={placeholderRef}
                                placeholder={placeholder}
                                shortcut={shortcut}
                                size={size}
                                // This is a workaround to correctly calculating the trigger width
                                // while using ResizeObserver wasn't 100% reliable.
                                onFocus={onResize}
                                onPointerEnter={onResize}
                                {...state}
                                {...rest}
                            />

                            <Popover size={size} triggerRef={placeholderRef} style={{ width: popoverWidth }} className={rest.popoverClassName}>
                                <AriaListBox {...{ items: itemsWithId, children }} className="size-full outline-none" />
                            </Popover>

                            {rest.hint && (
                                <HintText slot="description" {...state}>
                                    {rest.hint}
                                </HintText>
                            )}
                        </div>
                    )}
                </AriaComboBox>
            </SelectContext.Provider>
        );
    },
);

const InputDropdown = Select as typeof Select & {
    ComboBox: typeof ComboBox;
    ListBoxItem: typeof ListBoxItem;
};
InputDropdown.ComboBox = ComboBox;
InputDropdown.ListBoxItem = ListBoxItem;

export { InputDropdown };
