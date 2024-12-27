import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { createContext, forwardRef, useContext, useId } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { cx } from "@/components/utils";

const sizes = {
    sm: "size-16 px-md py-xxs td-lg-md",
    md: "size-20 px-md py-2.5 td-lg-md",
    lg: "size-24 px-md py-lg td-xl-md",
};

const PinInputContext = createContext<{ size: "sm" | "md" | "lg"; disabled?: boolean; digits?: number; id: string }>({
    size: "sm",
    disabled: false,
    digits: 4,
    id: "",
});

export const usePinInputContext = () => {
    const context = useContext(PinInputContext);

    if (!context) {
        throw new Error("The 'usePinInputContext' hook must be used within a '<PinInput />'");
    }

    return context;
};

interface InputProps extends Omit<ComponentPropsWithoutRef<typeof OTPInput>, "size" | "maxLength" | "className"> {
    width?: number;
    inputClassName?: string;
}

interface RootProps extends ComponentPropsWithoutRef<"div"> {
    size?: "sm" | "md" | "lg";
    digits?: number;
    disabled?: boolean;
}

const Root = forwardRef<ElementRef<"div">, RootProps>(({ className, size = "md", digits = 4, disabled, ...props }, ref) => {
    const id = useId();

    return (
        <PinInputContext.Provider value={{ size, digits, disabled, id }}>
            <div ref={ref} role="group" className={cx("flex h-max flex-col gap-sm", className)} {...props} />
        </PinInputContext.Provider>
    );
});
Root.displayName = "Root";

const Group = forwardRef<ElementRef<typeof OTPInput>, InputProps>(({ inputClassName, containerClassName, width, ...props }, ref) => {
    const { id, size, digits, disabled } = usePinInputContext();

    const heights = {
        sm: "h-[66px]",
        md: "h-[82px]",
        lg: "h-[98px]",
    };

    return (
        <OTPInput
            {...(props as any)}
            ref={ref}
            size={width}
            maxLength={digits}
            disabled={disabled}
            id={"pin-input-" + id}
            aria-label="Enter your pin"
            aria-labelledby={"pin-input-label-" + id}
            aria-describedby={"pin-input-description-" + id}
            containerClassName={cx("flex flex-row gap-lg", size === "sm" && "gap-md", heights[size], containerClassName)}
            className={cx("!w-full disabled:cursor-not-allowed", inputClassName)}
        />
    );
});
Group.displayName = "Group";

const Slot = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div"> & { index: number }>(({ index, className, ...props }, ref) => {
    const { size, disabled } = usePinInputContext();
    const { slots, isFocused } = useContext(OTPInputContext);
    const slot = slots[index];

    return (
        <div
            {...props}
            ref={ref}
            aria-label={"Enter digit " + (index + 1) + " of " + slots.length}
            className={cx(
                "relative flex items-center justify-center rounded-xl bg-primary text-center text-placeholder_subtle shadow-xs ring-1 ring-inset ring-border-primary transition-all duration-100 ease-linear",
                sizes[size],
                isFocused && slot?.isActive && "outline outline-2 outline-offset-2 outline-brand ring-2 ring-border-brand",
                slot?.char && "text-brand-tertiary_alt ring-2 ring-border-brand",
                disabled && "bg-disabled_subtle text-fg-disabled_subtle ring-border-disabled",
                className,
            )}
        >
            {slot?.char ? slot?.char : slot?.hasFakeCaret ? <FakeCaret /> : 0}
        </div>
    );
});
Slot.displayName = "Slot";

function FakeCaret() {
    return <p className="pointer-events-none animate-caret-blink text-fg-brand-primary td-xs-md">|</p>;
}

const Separator = forwardRef<ElementRef<"p">, ComponentPropsWithoutRef<"p">>(({ ...props }, ref) => {
    return (
        <div role="separator" {...props} ref={ref} className={cx("text-center text-placeholder_subtle td-xl-md", props.className)}>
            -
        </div>
    );
});
Separator.displayName = "Separator";

const Label = forwardRef<ElementRef<"label">, ComponentPropsWithoutRef<"label">>(({ className, ...props }, ref) => {
    const { id } = usePinInputContext();

    return <label {...props} htmlFor={"pin-input-" + id} id={"pin-input-label-" + id} ref={ref} className={cx("text-secondary tt-sm-md", className)} />;
});
Label.displayName = "Label";

const Description = forwardRef<ElementRef<"p">, ComponentPropsWithoutRef<"p">>(({ className, ...props }, ref) => {
    const { id } = usePinInputContext();

    return <p {...props} ref={ref} id={"pin-input-description-" + id} role="description" className={cx("text-tertiary tt-sm", className)} />;
});
Description.displayName = "Description";

const PinInput = Root as typeof Root & {
    Slot: typeof Slot;
    Label: typeof Label;
    Group: typeof Group;
    Separator: typeof Separator;
    Description: typeof Description;
};
PinInput.Slot = Slot;
PinInput.Label = Label;
PinInput.Group = Group;
PinInput.Separator = Separator;
PinInput.Description = Description;

export { PinInput };
