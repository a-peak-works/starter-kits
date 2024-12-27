import { cx, sortCx } from "@/components/utils";
import { SVGProps, useMemo } from "react";

const PaypassIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" {...props}>
            <g clip-path="url(#clip0_1307_7682)">
                <path
                    d="M15.1429 1.28571C17.0236 4.54326 18.0138 8.23849 18.0138 12C18.0138 15.7615 17.0236 19.4567 15.1429 22.7143M10.4286 3.64285C11.8956 6.18374 12.6679 9.06602 12.6679 12C12.6679 14.934 11.8956 17.8162 10.4286 20.3571M5.92859 5.80713C6.98933 7.66394 7.54777 9.77022 7.54777 11.9143C7.54777 14.0583 6.98933 16.1646 5.92859 18.0214M1.42859 8.14285C2.19306 9.29983 2.59834 10.6362 2.59834 12C2.59834 13.3638 2.19306 14.7002 1.42859 15.8571"
                    stroke="currentColor"
                    strokeWidth="2.57143"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1307_7682">
                    <rect width="20" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const MastercardIconWhite = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" {...props}>
            <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4392C13.3266 17.7699 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.63994C0 4.70619 4.04776 0.706604 9.04092 0.706604C11.2787 0.706604 13.3266 1.50993 14.9053 2.84066C16.484 1.50993 18.5319 0.706604 20.7697 0.706604C25.7629 0.706604 29.8106 4.70619 29.8106 9.63994C29.8106 14.5737 25.7629 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.7699 14.9053 16.4392Z"
                fill="white"
            />
            <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4392C16.8492 14.8007 18.0818 12.3625 18.0818 9.63994C18.0818 6.91733 16.8492 4.47919 14.9053 2.84066C16.484 1.50993 18.5319 0.706604 20.7697 0.706604C25.7628 0.706604 29.8106 4.70619 29.8106 9.63994C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.7699 14.9053 16.4392Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4392C16.8492 14.8007 18.0818 12.3625 18.0818 9.63995C18.0818 6.91736 16.8492 4.47924 14.9053 2.8407C12.9614 4.47924 11.7288 6.91736 11.7288 9.63995C11.7288 12.3625 12.9614 14.8007 14.9053 16.4392Z"
                fill="white"
            />
        </svg>
    );
};

const MastercardIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4393C13.3266 17.77 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.64C0 4.70625 4.04776 0.706665 9.04092 0.706665C11.2787 0.706665 13.3266 1.51 14.9053 2.84072C16.484 1.51 18.5319 0.706665 20.7697 0.706665C25.7629 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7629 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
                fill="#ED0006"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4393C16.8492 14.8007 18.0818 12.3626 18.0818 9.64C18.0818 6.91739 16.8492 4.47925 14.9053 2.84072C16.484 1.50999 18.5319 0.706665 20.7697 0.706665C25.7628 0.706665 29.8106 4.70625 29.8106 9.64C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4393Z"
                fill="#F9A000"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4393C16.8492 14.8008 18.0818 12.3627 18.0818 9.64007C18.0818 6.91748 16.8492 4.47936 14.9053 2.84082C12.9614 4.47936 11.7288 6.91748 11.7288 9.64007C11.7288 12.3627 12.9614 14.8008 14.9053 16.4393Z"
                fill="#FF5E00"
            />
        </svg>
    );
};

const styles = sortCx({
    // Normal
    transparent: {
        root: "bg-black/10 bg-gradient-to-br from-white/30 to-transparent backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "transparent-gradient": {
        root: "bg-black/10 bg-gradient-to-br from-white/30 to-transparent backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "brand-dark": {
        root: "bg-gradient-to-tr from-brand-900 to-brand-700 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "brand-light": {
        root: "bg-brand-100 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-black/10 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-gray-700",
        footerText: "text-gray-700",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white",
    },
    "gray-dark": {
        root: "bg-gradient-to-tr from-gray-900 to-gray-700 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "gray-light": {
        root: "bg-gray-100 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-black/10 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-gray-700",
        footerText: "text-gray-700",
        paypassIcon: "text-gray-400",
        cardTypeRoot: "bg-white",
    },

    // Strip
    "transparent-strip": {
        root: "bg-gradient-to-br from-white/30 to-transparent backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "gray-strip": {
        root: "bg-gray-100 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-gray-700",
        footerText: "text-white",
        paypassIcon: "text-gray-400",
        cardTypeRoot: "bg-white/10",
    },
    "gradient-strip": {
        root: "bg-gradient-to-b from-[#A5C0EE] to-[#FBC5EC] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "salmon-strip": {
        root: "bg-[#F4D9D0] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-gray-700",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },

    // Vertical strip
    "gray-strip-vertical": {
        root: "bg-gradient-to-br from-white/30 to-transparent before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-gray-400",
        cardTypeRoot: "bg-white/10",
    },
    "gradient-strip-vertical": {
        root: "bg-gradient-to-b from-[#FBC2EB] to-[#A18CD1] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
    "salmon-strip-vertical": {
        root: "bg-[#F4D9D0] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:ring-1 before:ring-inset before:ring-white/30 before:mask-image-br before:mask-image-end-opacity-20",
        company: "text-white",
        footerText: "text-white",
        paypassIcon: "text-white",
        cardTypeRoot: "bg-white/10",
    },
});

const NORMAL_TYPES = ["transparent", "transparent-gradient", "brand-dark", "brand-light", "gray-dark", "gray-light"] as const;
const STRIP_TYPES = ["transparent-strip", "gray-strip", "gradient-strip", "salmon-strip"] as const;
const VERTICAL_STRIP_TYPES = ["gray-strip-vertical", "gradient-strip-vertical", "salmon-strip-vertical"] as const;

const CARD_WITH_COLOR_LOGO = ["brand-dark", "brand-light", "gray-dark", "gray-light"] as const;

type CreditCardType = (typeof NORMAL_TYPES)[number] | (typeof STRIP_TYPES)[number] | (typeof VERTICAL_STRIP_TYPES)[number];

interface CreditCardProps {
    company?: string;
    cardNumber?: string;
    cardHolder?: string;
    cardExpiration?: string;
    type?: CreditCardType;
    className?: string;
    width?: number;
}

const calculateScale = (desiredWidth: number, originalWidth: number, originalHeight: number) => {
    // Calculate the scale factor
    const scale = desiredWidth / originalWidth;

    // Calculate the new dimensions
    const scaledWidth = originalWidth * scale;
    const scaledHeight = originalHeight * scale;

    return {
        scale: scale.toFixed(4), // Scale rounded to 4 decimal places
        scaledWidth: scaledWidth.toFixed(2), // Width rounded to 2 decimal places
        scaledHeight: scaledHeight.toFixed(2), // Height rounded to 2 decimal places
    };
};

const CreditCard = ({
    company = "Untitled.",
    cardNumber = "1234 1234 1234 1234",
    cardHolder = "OLIVIA RHYE",
    cardExpiration = "06/28",
    type = "brand-dark",
    className,
    width,
}: CreditCardProps) => {
    const originalWidth = 316;
    const originalHeight = 190;

    const { scale, scaledWidth, scaledHeight } = useMemo(() => {
        if (!width)
            return {
                scale: 1,
                scaledWidth: originalWidth,
                scaledHeight: originalHeight,
            };

        return calculateScale(width, originalWidth, originalHeight);
    }, [width]);

    return (
        <div
            style={{
                width: `${scaledWidth}px`,
                height: `${scaledHeight}px`,
            }}
            className={cx("relative flex", className)}
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    width: `${originalWidth}px`,
                    height: `${originalHeight}px`,
                }}
                className={cx("absolute left-0 top-0 flex origin-top-left flex-col justify-between overflow-hidden rounded-2xl p-4", styles[type].root)}
            >
                {/* Horizontal strip */}
                {STRIP_TYPES.includes(type as (typeof STRIP_TYPES)[number]) && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gray-800"></div>
                )}
                {/* Vertical stripe */}
                {VERTICAL_STRIP_TYPES.includes(type as (typeof VERTICAL_STRIP_TYPES)[number]) && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 right-[88px] z-0 bg-gray-800"></div>
                )}
                {/* Gradient diffusor */}
                {type === "transparent-gradient" && (
                    <div className="absolute -left-4 -top-4 grid grid-cols-2 blur-3xl">
                        <div className="size-20 rounded-tl-full bg-pink-500 opacity-30 mix-blend-normal" />
                        <div className="size-20 rounded-tr-full bg-orange-500 opacity-50 mix-blend-normal" />
                        <div className="size-20 rounded-bl-full bg-blue-500 opacity-30 mix-blend-normal" />
                        <div className="size-20 rounded-br-full bg-success-500 opacity-30 mix-blend-normal" />
                    </div>
                )}

                <div className="relative flex items-start justify-between px-1 pt-1">
                    <div className={cx("text-md font-semibold leading-[normal]", styles[type].company)}>{company}</div>

                    <PaypassIcon className={styles[type].paypassIcon} />
                </div>

                <div className="relative flex items-end justify-between gap-3">
                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex items-end gap-1">
                            <p
                                style={{
                                    wordBreak: "break-word",
                                }}
                                className={cx("font-manrope text-xs font-semibold uppercase leading-snug tracking-[0.6px]", styles[type].footerText)}
                            >
                                {cardHolder}
                            </p>
                            <p
                                className={cx(
                                    "ml-auto text-right font-manrope text-xs font-semibold leading-[normal] tracking-[0.6px]",
                                    styles[type].footerText,
                                )}
                            >
                                {cardExpiration}
                            </p>
                        </div>
                        <div className={cx("font-manrope text-md font-semibold leading-[normal] tracking-[2.4px]", styles[type].footerText)}>
                            {cardNumber}

                            {/* This is just a placeholder to always keep the space for card number even if there's no card number yet. */}
                            <span className="pointer-events-none invisible inline-block w-0 max-w-0 opacity-0">1</span>
                        </div>
                    </div>

                    <div className={cx("flex h-8 w-[46px] shrink-0 items-center justify-center rounded", styles[type].cardTypeRoot)}>
                        {CARD_WITH_COLOR_LOGO.includes(type as (typeof CARD_WITH_COLOR_LOGO)[number]) ? <MastercardIcon /> : <MastercardIconWhite />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
