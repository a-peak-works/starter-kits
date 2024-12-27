import { useId } from "react";
import { ChevronDown } from "@a-peak-works/untitledui-icons";
import HintText from "../inputs/hint-text";
import Label from "../inputs/label";

export const NativeSelect = (props: {
    label?: string;
    hint?: string;
    value?: string;
    options: { label: string; value: string; disabled?: boolean }[];
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
    const id = useId();
    const selectId = `select-native-${id}`;
    const hintId = `select-native-hint-${id}`;

    return (
        <div className="w-full">
            {props.label && (
                <Label htmlFor={selectId} id={selectId} className="mb-1.5">
                    {props.label}
                </Label>
            )}

            <div className="relative grid w-full items-center">
                <select
                    id={selectId}
                    value={props.value}
                    defaultValue="default"
                    onChange={props.onChange}
                    aria-describedby={hintId}
                    aria-labelledby={selectId}
                    className="appearance-none rounded-lg bg-primary px-3.5 py-2.5 text-primary shadow-xs outline-none ring-1 ring-inset ring-border-primary transition duration-200 ease-in-out tt-md-md placeholder:text-fg-quaternary focus:ring-2 focus:ring-border-brand disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-disabled"
                >
                    <option value="default" disabled defaultChecked>
                        Select team member
                    </option>
                    {props.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <span className="absolute right-3.5">
                    <ChevronDown aria-hidden="true" size={20} className="text-fg-quaternary" />
                </span>
            </div>

            {props.hint && (
                <HintText className="mt-2" id={hintId}>
                    {props.hint}
                </HintText>
            )}
        </div>
    );
};

NativeSelect.args = {
    label: "Team member",
    hint: "This is a hint text to help user.",
};
