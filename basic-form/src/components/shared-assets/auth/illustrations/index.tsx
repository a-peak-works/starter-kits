import type { SVGProps } from "react";
import { Cloud } from "./cloud";

const types = {
    cloud: Cloud,
};

interface BackgroundPatternProps extends SVGProps<SVGSVGElement> {
    size?: "sm" | "md" | "lg";
    className?: string;
    type: keyof typeof types;
}

export const Illustration = (props: BackgroundPatternProps) => {
    const { type } = props;
    const Illustration = types[type];
    return <Illustration {...props} />;
};
