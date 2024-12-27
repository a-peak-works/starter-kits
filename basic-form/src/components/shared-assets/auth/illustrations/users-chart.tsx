import type { HTMLAttributes } from "react";
import { cx } from "@/components/utils";
import LineChart from "./line-chart";

const UsersChart = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className={cx(
                "flex h-[260px] w-[432px] flex-col overflow-hidden rounded-xl bg-primary p-5 shadow-2xl ring-1 ring-inset ring-border-secondary",
                props.className,
            )}
        >
            <div className="text-primary tt-sm-semi">Users over time</div>
            <div className="relative flex min-h-0 min-w-0 flex-1 items-center">
                <div className="absolute inset-0 flex size-full flex-col justify-between py-3">
                    <span className="h-px w-full bg-border-tertiary" />
                    <span className="h-px w-full bg-border-tertiary" />
                    <span className="h-px w-full bg-border-tertiary" />
                    <span className="h-px w-full bg-border-tertiary" />
                    <span className="h-px w-full bg-border-tertiary" />
                    <span className="h-px w-full bg-border-tertiary" />
                </div>
                <LineChart preserveAspectRatio="none" className="relative max-h-full w-full max-w-full" />
            </div>

            <ul className="flex justify-between px-2">
                <li className="text-tertiary tt-xs">Jan</li>
                <li className="text-tertiary tt-xs">Mar</li>
                <li className="text-tertiary tt-xs">May</li>
                <li className="text-tertiary tt-xs">Jul</li>
                <li className="text-tertiary tt-xs">Sep</li>
                <li className="text-tertiary tt-xs">Nov</li>
                <li className="text-tertiary tt-xs">Dec</li>
            </ul>
        </div>
    );
};

export default UsersChart;
