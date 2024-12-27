import * as Tags from "./tags";

export default {
    title: "Shared Components/Tags",
    decorators: [
        (Story: any) => (
            <div className="flex min-h-screen w-full items-center justify-center overflow-auto bg-primary">
                <Story />
            </div>
        ),
    ],
};

export const All = () => <Tags.All />;

All.decorators = [
    (Story: any) => (
        <div className="flex min-h-screen w-full items-center overflow-auto px-20">
            <Story />
        </div>
    ),
];

export const Default = () => (
    <div className="flex flex-col gap-10">
        <Tags.SimpleSm />
        <Tags.SimpleMd />
        <Tags.SimpleLg />
    </div>
);

export const CloseX = () => (
    <div className="flex flex-col gap-10">
        <Tags.CloseXSm />
        <Tags.CloseXMd />
        <Tags.CloseXLg />
    </div>
);

export const Count = () => (
    <div className="flex flex-col gap-10">
        <Tags.CountSm />
        <Tags.CountMd />
        <Tags.CountLg />
    </div>
);

export const CheckboxDefault = () => (
    <div className="flex flex-col gap-10">
        <Tags.CheckboxDefaultSm />
        <Tags.CheckboxDefaultMd />
        <Tags.CheckboxDefaultLg />
    </div>
);

export const CheckboxCloseX = () => (
    <div className="flex flex-col gap-10">
        <Tags.CheckboxCloseXSm />
        <Tags.CheckboxCloseXMd />
        <Tags.CheckboxCloseXLg />
    </div>
);

export const CheckboxCount = () => (
    <div className="flex flex-col gap-10">
        <Tags.CheckboxCountSm />
        <Tags.CheckboxCountMd />
        <Tags.CheckboxCountLg />
    </div>
);
