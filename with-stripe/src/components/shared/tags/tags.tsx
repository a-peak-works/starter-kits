import type { HTMLAttributes } from "react";
import { XClose } from "@a-peak-works/untitledui-icons";
import { cx } from "@/components/utils";
import Dot from "../../foundations/dot-icon";
import { Avatar } from "../avatar/avatar";

const CheckboxBase = (
    props: HTMLAttributes<HTMLInputElement> & { disabled?: boolean; checked?: boolean; wrapperClassName?: string; size?: "sm" | "md" | "lg" },
) => {
    const { wrapperClassName, size = "sm", ...inputProps } = props;

    return (
        <div className={cx("relative inline-flex items-center justify-center", wrapperClassName)}>
            <input
                type="checkbox"
                className={cx(
                    size === "lg" ? "h-4.5 w-4.5" : size === "md" ? "size-4" : "h-3.5 w-3.5",
                    "peer cursor-pointer appearance-none rounded border border-primary bg-primary transition duration-200 ease-in-out checked:border-brand-solid checked:bg-brand-solid checked:hover:border-brand-solid_hover checked:hover:bg-brand-solid_hover focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring disabled:cursor-auto disabled:border-disabled disabled:bg-disabled_subtle checked:disabled:bg-disabled_subtle disabled:hover:border-disabled",
                )}
                {...inputProps}
            />

            {size === "sm" && (
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute text-fg-white opacity-0 transition-inherit peer-checked:translate-y-0 peer-checked:opacity-100 peer-disabled:text-fg-disabled_subtle"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8.33341 2.5L3.75008 7.08333L1.66675 5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}

            {size === "md" && (
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute text-fg-white opacity-0 transition-inherit peer-checked:translate-y-0 peer-checked:opacity-100 peer-disabled:text-fg-disabled_subtle"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}

            {size === "lg" && (
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute text-fg-white opacity-0 transition-inherit peer-checked:translate-y-0 peer-checked:opacity-100 peer-disabled:text-fg-disabled_subtle"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M11.6667 3.5L5.25004 9.91667L2.33337 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </div>
    );
};

interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
    isDisabled?: boolean;
}

export const CloseButton = ({ size, className, isDisabled, ...props }: CloseButtonProps) => {
    return (
        <button
            {...props}
            aria-label="Remove this tag"
            className={cx(
                "flex cursor-pointer rounded-[3px] text-fg-quinary transition duration-150 hover:bg-primary_hover hover:text-fg-quinary_hover focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring disabled:cursor-not-allowed",
                size === "lg" ? "p-[3px]" : "p-0.5",
                className,
            )}
            disabled={isDisabled}
        >
            <XClose size={size === "lg" ? 14 : size === "md" ? 12 : 10} strokeWidth="3" />
        </button>
    );
};

const Count = ({ size, children }: { size?: "sm" | "md" | "lg"; children: any }) => {
    let sizeClasses = "px-1 text-xs font-medium leading-4";

    if (size === "md") {
        sizeClasses = "px-[5px] text-xs font-medium leading-xs";
    }

    if (size === "lg") {
        sizeClasses = "px-1.5 tt-sm-md";
    }

    return <span className={`${sizeClasses} rounded-[3px] bg-tertiary text-secondary`}>{children}</span>;
};

export const All = () => {
    return (
        <div>
            <div className="flex gap-16">
                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex rounded-md border border-primary bg-primary px-[7px] py-0.5">
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                    </div>

                    <div className="flex rounded-md border border-primary bg-primary px-2 py-[1px]">
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    <div className="flex rounded-md border border-primary bg-primary px-[9px] py-[3px]">
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    <div className="flex items-center gap-[3px] rounded-md border border-primary bg-primary py-0.5 pl-[7px] pr-[3px]">
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <CloseButton size="sm" />
                    </div>

                    <div className="flex items-center gap-[3px] rounded-md border border-primary bg-primary py-[1px] pl-2 pr-[3px]">
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="md" />
                    </div>

                    <div className="flex items-center gap-[3px] rounded-md border border-primary bg-primary py-[3px] pl-[9px] pr-[3px]">
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="lg" />
                    </div>

                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[7px] pr-[3px]">
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-2 pr-0.5">
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-[9px] pr-[3px]">
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="lg">5</Count>
                    </div>
                </div>

                {/* ************************************ */}

                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[3px] pr-[7px]">
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-2">
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[9px]">
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>
                    {/* ------------------ */}
                    <div className="flex items-center rounded-md border border-primary bg-primary px-1 py-0.5">
                        <img src="/flags/AU.svg" className="mr-1 size-4 rounded-full" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[1px] pl-1 pr-[3px]">
                        <img src="/flags/AU.svg" className="mr-[5px] size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                        <img src="/flags/AU.svg" className="mr-1.5 size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>
                    {/* ------------------ */}
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary px-[3px] py-0.5">
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-0.5">
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="lg">5</Count>
                    </div>
                </div>

                {/* ************************************ */}

                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[3px] pr-[7px]">
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-2">
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[9px]">
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center rounded-md border border-primary bg-primary px-1 py-0.5">
                        <img src="/avatars/olivia_rhye.jpg" className="mr-1 size-4 rounded-full" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[1px] pl-1 pr-[3px]">
                        <img src="/avatars/olivia_rhye.jpg" className="mr-[5px] size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                        <img src="/avatars/olivia_rhye.jpg" className="mr-1.5 size-4 rounded-full" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary px-[3px] py-0.5">
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-0.5">
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="lg">5</Count>
                    </div>
                </div>

                {/* ************************************ */}

                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1.5 pr-[7px]">
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1.5 pr-2">
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-2 pr-[9px]">
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-[5px] pr-[3px]">
                        <Dot size="sm" className="mr-1 text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[1px] pl-1.5 pr-[3px]">
                        <Dot size="sm" className="mr-[5px] text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-2 pr-[3px]">
                        <Dot size="sm" className="mr-1.5 text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[5px] pr-[3px]">
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-xs-md">Label</span>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1.5 pr-0.5">
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-2 pr-[3px]">
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <span className="select-none text-secondary tt-sm-md">Label</span>
                        <Count size="lg">5</Count>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex gap-16">
                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                        <CheckboxBase size="sm" id="checkbox-1" />
                        <label htmlFor="checkbox-1" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                        <CheckboxBase size="md" id="checkbox-2" />
                        <label htmlFor="checkbox-2" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                        <CheckboxBase size="lg" id="checkbox-3" />
                        <label htmlFor="checkbox-3" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-4" wrapperClassName="mr-1" />
                        <label htmlFor="checkbox-4" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                        <CheckboxBase size="md" id="checkbox-5" wrapperClassName="mr-[5px]" />
                        <label htmlFor="checkbox-5" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-6" wrapperClassName="mr-1.5" />
                        <label htmlFor="checkbox-6" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-7" />
                        <label htmlFor="checkbox-7" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                        <CheckboxBase size="md" id="checkbox-8" />
                        <label htmlFor="checkbox-8" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-9" />
                        <label htmlFor="checkbox-9" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="lg">5</Count>
                    </div>
                </div>

                {/* ************************************ */}

                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                        <CheckboxBase size="sm" id="checkbox-10" />
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <label htmlFor="checkbox-10" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                        <CheckboxBase size="md" id="checkbox-11" />
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <label htmlFor="checkbox-11" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                        <CheckboxBase size="lg" id="checkbox-12" />
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <label htmlFor="checkbox-12" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    {/* ------------------ */}
                    <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-13" />
                        <img src="/flags/AU.svg" className="mx-1 size-4 rounded-full" />
                        <label htmlFor="checkbox-13" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                        <CheckboxBase size="md" id="checkbox-14" />
                        <img src="/flags/AU.svg" className="mx-[5px] size-4 rounded-full" />
                        <label htmlFor="checkbox-14" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-15" />
                        <img src="/flags/AU.svg" className="mx-1.5 size-4 rounded-full" />
                        <label htmlFor="checkbox-15" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>
                    {/* ------------------ */}
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-16" />
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <label htmlFor="checkbox-16" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                        <CheckboxBase size="md" id="checkbox-17" />
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <label htmlFor="checkbox-17" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-18" />
                        <img src="/flags/AU.svg" className="size-4 rounded-full" />
                        <label htmlFor="checkbox-18" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="lg">5</Count>
                    </div>
                </div>

                {/* ************************************ */}

                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                        <CheckboxBase size="sm" id="checkbox-19" />
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <label htmlFor="checkbox-19" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                        <CheckboxBase size="md" id="checkbox-20" />
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <label htmlFor="checkbox-20" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                        <CheckboxBase size="lg" id="checkbox-21" />
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <label htmlFor="checkbox-21" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-22" />
                        <img src="/avatars/olivia_rhye.jpg" className="mx-1 size-4 rounded-full" />
                        <label htmlFor="checkbox-22" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                        <CheckboxBase size="md" id="checkbox-23" />
                        <img src="/avatars/olivia_rhye.jpg" className="mx-[5px] size-4 rounded-full" />
                        <label htmlFor="checkbox-23" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-24" />
                        <img src="/avatars/olivia_rhye.jpg" className="mx-1.5 size-4 rounded-full" />
                        <label htmlFor="checkbox-24" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-25" />
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <label htmlFor="checkbox-25" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                        <CheckboxBase size="md" id="checkbox-26" />
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <label htmlFor="checkbox-26" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-27" />
                        <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                        <label htmlFor="checkbox-27" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="lg">5</Count>
                    </div>
                </div>

                {/* ************************************ */}

                <div className="grid grid-cols-[repeat(3,max-content)] items-start justify-items-start gap-x-4 gap-y-5">
                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                        <CheckboxBase size="sm" id="checkbox-30" />
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <label htmlFor="checkbox-30" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                        <CheckboxBase size="md" id="checkbox-31" />
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <label htmlFor="checkbox-31" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                        <CheckboxBase size="lg" id="checkbox-32" />
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <label htmlFor="checkbox-32" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-33" />
                        <Dot size="sm" className="mx-1 text-fg-success-secondary" />
                        <label htmlFor="checkbox-33" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <CloseButton size="sm" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                        <CheckboxBase size="md" id="checkbox-34" />
                        <Dot size="sm" className="mx-[5px] text-fg-success-secondary" />
                        <label htmlFor="checkbox-34" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="md" className="ml-[3px]" />
                    </div>

                    <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-35" />
                        <Dot size="sm" className="mx-1.5 text-fg-success-secondary" />
                        <label htmlFor="checkbox-35" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <CloseButton size="lg" className="ml-[3px]" />
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                        <CheckboxBase size="sm" id="checkbox-40" />
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <label htmlFor="checkbox-40" className="select-none text-secondary tt-xs-md">
                            Label
                        </label>
                        <Count size="sm">5</Count>
                    </div>

                    <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                        <CheckboxBase size="md" id="checkbox-41" />
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <label htmlFor="checkbox-41" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="md">5</Count>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                        <CheckboxBase size="lg" id="checkbox-42" />
                        <Dot size="sm" className="text-fg-success-secondary" />
                        <label htmlFor="checkbox-42" className="select-none text-secondary tt-sm-md">
                            Label
                        </label>
                        <Count size="lg">5</Count>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SimpleSm = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex rounded-md border border-primary bg-primary px-[7px] py-0.5">
                <span className="select-none text-secondary tt-xs-md">Label</span>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[3px] pr-[7px]">
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[3px] pr-[7px]">
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1.5 pr-[7px]">
                <Dot size="sm" className="text-fg-success-secondary" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
            </div>
        </div>
    );
};

export const SimpleMd = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex rounded-md border border-primary bg-primary px-2 py-[1px]">
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-2">
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-2">
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1.5 pr-2">
                <Dot size="sm" className="text-fg-success-secondary" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>
        </div>
    );
};

export const SimpleLg = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex rounded-md border border-primary bg-primary px-[9px] py-[3px]">
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[9px]">
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[9px]">
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-2 pr-[9px]">
                <Dot size="sm" className="text-fg-success-secondary" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
            </div>
        </div>
    );
};

export const CloseXSm = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-[3px] rounded-md border border-primary bg-primary py-0.5 pl-[7px] pr-[3px]">
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <CloseButton size="sm" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary px-1 py-0.5">
                <img src="/flags/AU.svg" className="mr-1 size-4 rounded-full" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary px-1 py-0.5">
                <img src="/avatars/olivia_rhye.jpg" className="mr-1 size-4 rounded-full" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-[5px] pr-[3px]">
                <Dot size="sm" className="mr-1 text-fg-success-secondary" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>
        </div>
    );
};

export const CloseXMd = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-[3px] rounded-md border border-primary bg-primary py-[1px] pl-2 pr-[3px]">
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="md" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[1px] pl-1 pr-[3px]">
                <img src="/flags/AU.svg" className="mr-[5px] size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="md" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[1px] pl-1 pr-[3px]">
                <img src="/avatars/olivia_rhye.jpg" className="mr-[5px] size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="md" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[1px] pl-1.5 pr-[3px]">
                <Dot size="sm" className="mr-[5px] text-fg-success-secondary" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="md" className="ml-[3px]" />
            </div>
        </div>
    );
};

export const CloseXLg = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-[3px] rounded-md border border-primary bg-primary py-[3px] pl-[9px] pr-[3px]">
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="lg" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                <img src="/flags/AU.svg" className="mr-1.5 size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                <img src="/avatars/olivia_rhye.jpg" className="mr-1.5 size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-2 pr-[3px]">
                <Dot size="sm" className="mr-1.5 text-fg-success-secondary" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>
        </div>
    );
};

export const CountSm = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[7px] pr-[3px]">
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <Count size="sm">5</Count>
            </div>
            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary px-[3px] py-0.5">
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <Count size="sm">5</Count>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary px-[3px] py-0.5">
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <Count size="sm">5</Count>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-[5px] pr-[3px]">
                <Dot size="sm" className="text-fg-success-secondary" />
                <span className="select-none text-secondary tt-xs-md">Label</span>
                <Count size="sm">5</Count>
            </div>
        </div>
    );
};

export const CountMd = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-2 pr-0.5">
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="md">5</Count>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-0.5">
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="md">5</Count>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1 pr-0.5">
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="md">5</Count>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-1.5 pr-0.5">
                <Dot size="sm" className="text-fg-success-secondary" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="md">5</Count>
            </div>
        </div>
    );
};

export const CountLg = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-[9px] pr-[3px]">
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="lg">5</Count>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="lg">5</Count>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1.5 pr-[3px]">
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="lg">5</Count>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-2 pr-[3px]">
                <Dot size="sm" className="text-fg-success-secondary" />
                <span className="select-none text-secondary tt-sm-md">Label</span>
                <Count size="lg">5</Count>
            </div>
        </div>
    );
};

export const CheckboxDefaultSm = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                <CheckboxBase size="sm" id="checkbox-1" />
                <label htmlFor="checkbox-1" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                <CheckboxBase size="sm" id="checkbox-10" />
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <label htmlFor="checkbox-10" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                <CheckboxBase size="sm" id="checkbox-19" />
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <label htmlFor="checkbox-19" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[7px]">
                <CheckboxBase size="sm" id="checkbox-30" />
                <Dot size="sm" className="text-fg-success-secondary" />
                <label htmlFor="checkbox-30" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
            </div>
        </div>
    );
};

export const CheckboxDefaultMd = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                <CheckboxBase size="md" id="checkbox-2" />
                <label htmlFor="checkbox-2" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                <CheckboxBase size="md" id="checkbox-11" />
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <label htmlFor="checkbox-11" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                <CheckboxBase size="md" id="checkbox-20" />
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <label htmlFor="checkbox-20" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-2">
                <CheckboxBase size="md" id="checkbox-31" />
                <Dot size="sm" className="text-fg-success-secondary" />
                <label htmlFor="checkbox-31" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>
        </div>
    );
};

export const CheckboxDefaultLg = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                <CheckboxBase size="lg" id="checkbox-3" />
                <label htmlFor="checkbox-3" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                <CheckboxBase size="lg" id="checkbox-12" />
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <label htmlFor="checkbox-12" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                <CheckboxBase size="lg" id="checkbox-21" />
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <label htmlFor="checkbox-21" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[9px]">
                <CheckboxBase size="lg" id="checkbox-32" />
                <Dot size="sm" className="text-fg-success-secondary" />
                <label htmlFor="checkbox-32" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
            </div>
        </div>
    );
};

export const CheckboxCloseXSm = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-4" wrapperClassName="mr-1" />
                <label htmlFor="checkbox-4" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-13" />
                <img src="/flags/AU.svg" className="mx-1 size-4 rounded-full" />
                <label htmlFor="checkbox-13" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-22" />
                <img src="/avatars/olivia_rhye.jpg" className="mx-1 size-4 rounded-full" />
                <label htmlFor="checkbox-22" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-33" />
                <Dot size="sm" className="mx-1 text-fg-success-secondary" />
                <label htmlFor="checkbox-33" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <CloseButton size="sm" className="ml-[3px]" />
            </div>
        </div>
    );
};

export const CheckboxCloseXMd = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                <CheckboxBase size="md" id="checkbox-5" wrapperClassName="mr-[5px]" />
                <label htmlFor="checkbox-5" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="md" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                <CheckboxBase size="md" id="checkbox-14" />
                <img src="/flags/AU.svg" className="mx-[5px] size-4 rounded-full" />
                <label htmlFor="checkbox-14" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="md" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                <CheckboxBase size="md" id="checkbox-23" />
                <img src="/avatars/olivia_rhye.jpg" className="mx-[5px] size-4 rounded-full" />
                <label htmlFor="checkbox-23" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="md" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary px-[3px] py-[1px]">
                <CheckboxBase size="md" id="checkbox-34" />
                <Dot size="sm" className="mx-[5px] text-fg-success-secondary" />
                <label htmlFor="checkbox-34" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="md" className="ml-[3px]" />
            </div>
        </div>
    );
};

export const CheckboxCloseXLg = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-6" wrapperClassName="mr-1.5" />
                <label htmlFor="checkbox-6" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-15" />
                <img src="/flags/AU.svg" className="mx-1.5 size-4 rounded-full" />
                <label htmlFor="checkbox-15" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-24" />
                <img src="/avatars/olivia_rhye.jpg" className="mx-1.5 size-4 rounded-full" />
                <label htmlFor="checkbox-24" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>

            <div className="flex items-center rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-35" />
                <Dot size="sm" className="mx-1.5 text-fg-success-secondary" />
                <label htmlFor="checkbox-35" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <CloseButton size="lg" className="ml-[3px]" />
            </div>
        </div>
    );
};

export const CheckboxCountSm = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-7" />
                <label htmlFor="checkbox-7" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <Count size="sm">5</Count>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-16" />
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <label htmlFor="checkbox-16" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <Count size="sm">5</Count>
            </div>
            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-25" />
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <label htmlFor="checkbox-25" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <Count size="sm">5</Count>
            </div>

            <div className="flex items-center gap-1 rounded-md border border-primary bg-primary py-0.5 pl-1 pr-[3px]">
                <CheckboxBase size="sm" id="checkbox-40" />
                <Dot size="sm" className="text-fg-success-secondary" />
                <label htmlFor="checkbox-40" className="select-none text-secondary tt-xs-md">
                    Label
                </label>
                <Count size="sm">5</Count>
            </div>
        </div>
    );
};

export const CheckboxCountMd = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                <CheckboxBase size="md" id="checkbox-8" />
                <label htmlFor="checkbox-8" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="md">5</Count>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                <CheckboxBase size="md" id="checkbox-17" />
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <label htmlFor="checkbox-17" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="md">5</Count>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                <CheckboxBase size="md" id="checkbox-26" />
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <label htmlFor="checkbox-26" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="md">5</Count>
            </div>

            <div className="flex items-center gap-[5px] rounded-md border border-primary bg-primary py-[1px] pl-[3px] pr-0.5">
                <CheckboxBase size="md" id="checkbox-41" />
                <Dot size="sm" className="text-fg-success-secondary" />
                <label htmlFor="checkbox-41" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="md">5</Count>
            </div>
        </div>
    );
};

export const CheckboxCountLg = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-9" />
                <label htmlFor="checkbox-9" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="lg">5</Count>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-18" />
                <img src="/flags/AU.svg" className="size-4 rounded-full" />
                <label htmlFor="checkbox-18" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="lg">5</Count>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-27" />
                <Avatar alt="Olivia Rhye" src="/avatars/olivia_rhye.jpg" size="xxs" />
                <label htmlFor="checkbox-27" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="lg">5</Count>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-primary bg-primary py-[3px] pl-1 pr-[3px]">
                <CheckboxBase size="lg" id="checkbox-42" />
                <Dot size="sm" className="text-fg-success-secondary" />
                <label htmlFor="checkbox-42" className="select-none text-secondary tt-sm-md">
                    Label
                </label>
                <Count size="lg">5</Count>
            </div>
        </div>
    );
};
