import type { ElementRef } from "react";
import { forwardRef, useContext } from "react";
import { Check, User01 } from "@a-peak-works/untitledui-icons";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";
import { ListBoxItem as AriaListBoxItem, Text } from "react-aria-components";
import Dot from "@/components/foundations/dot-icon";
import { cx } from "@/components/utils";
import { Avatar } from "../avatar/avatar";
import type { IconComponentType } from "../badges/badge-types";
import type { SelectValueType } from "./input-dropdown";
import { SelectContext } from "./input-dropdown";

export interface ListBoxItemIconProps {
    size?: "sm" | "md";
    isDisabled?: boolean;
    icon?: IconComponentType;
}

const icons = {
    default: () => <></>,
    search: () => <></>,
    tags: (props: ListBoxItemIconProps) => (
        <User01 aria-hidden="true" className={cx("size-5 shrink-0 text-fg-quaternary", props.isDisabled && "text-fg-disabled")} />
    ),
    avatarLeading: (props: ListBoxItemIconProps) => (
        <User01 aria-hidden="true" className={cx("size-5 shrink-0 text-fg-quaternary", props.isDisabled && "text-fg-disabled")} />
    ),
    iconLeading: ({ icon: Icon = User01, ...props }: ListBoxItemIconProps) => (
        <Icon aria-hidden="true" className={cx("size-5 shrink-0 text-fg-quaternary", props.isDisabled && "text-fg-disabled")} />
    ),
    dotLeading: ({ icon: Icon, ...props }: ListBoxItemIconProps) =>
        Icon ? (
            <Icon aria-hidden="true" className={cx("shrink-0 text-fg-success-secondary", props.isDisabled && "text-fg-disabled_subtle")} />
        ) : (
            <Dot size="md" className={cx("shrink-0 text-fg-success-secondary", props.isDisabled && "text-fg-disabled_subtle")} />
        ),
};

interface ListBoxItemProps extends AriaListBoxItemProps<SelectValueType> {
    item: SelectValueType;
}

export const ListBoxItem = forwardRef<ElementRef<typeof AriaListBoxItem>, ListBoxItemProps>(({ item, className, ...props }, ref) => {
    const { type, size } = useContext(SelectContext);
    const listItem = { ...item, icon: item?.icon };

    const sizes = {
        sm: "p-md pr-2.5",
        md: "p-2.5 pl-md",
    };

    const Icon = icons[type];

    const textValue = listItem?.supportingText ? listItem.label + " " + listItem.supportingText : listItem.label;

    return (
        <AriaListBoxItem
            ref={ref}
            value={listItem}
            id={listItem.value}
            key={listItem.value}
            textValue={textValue}
            isDisabled={listItem.isDisabled}
            {...props}
            className={(states) => cx("w-full px-sm py-px outline-none", typeof className === "function" ? className(states) : className)}
        >
            {({ isSelected, isFocused, isFocusVisible, isHovered, isDisabled }) => (
                <div
                    className={cx(
                        "flex cursor-pointer select-none items-center gap-md rounded-md outline-none",
                        (isSelected || isHovered) && "bg-active",
                        isDisabled && "cursor-not-allowed",
                        isFocused && "bg-primary_hover",
                        isFocusVisible && "ring-2 ring-inset ring-focus-ring",
                        sizes[size],
                    )}
                >
                    {"avatarUrl" in listItem ? <Avatar aria-hidden="true" size="xs" src={listItem.avatarUrl} alt={listItem.label} /> : <Icon {...listItem} />}

                    <section className="flex w-full min-w-0 flex-1 flex-wrap gap-x-md">
                        <Text slot="label" className={cx("truncate whitespace-nowrap text-primary tt-md-md", isDisabled && "text-disabled")}>
                            {listItem.label}
                        </Text>

                        {listItem?.supportingText && (
                            <Text slot="description" className={cx("whitespace-nowrap text-tertiary tt-md", isDisabled && "text-disabled")}>
                                {listItem.supportingText}
                            </Text>
                        )}
                    </section>
                    {isSelected && <Check className={cx("ml-auto size-5 text-fg-brand-primary", isDisabled && "text-fg-disabled")} aria-hidden="true" />}
                </div>
            )}
        </AriaListBoxItem>
    );
});

export default ListBoxItem;
