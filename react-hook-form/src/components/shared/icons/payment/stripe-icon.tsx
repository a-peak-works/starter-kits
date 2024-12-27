import { SVGProps } from "react";

const StripeIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" {...props} className={className}>
            <path
                d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z"
                fill="white"
            />
            <path
                d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z"
                className="stroke-border-secondary"
                strokeWidth="0.75"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2684 8.14192L16.5413 8.52349V7.08202L18.2684 6.70752V8.14192ZM21.8602 8.94038C21.1858 8.94038 20.7523 9.26542 20.5115 9.49153L20.422 9.05344H18.9082V17.2924L20.6285 16.9179L20.6354 14.9183C20.8831 15.102 21.2478 15.3634 21.8533 15.3634C23.085 15.3634 24.2066 14.3459 24.2066 12.106C24.1997 10.0568 23.0643 8.94038 21.8602 8.94038ZM21.4473 13.8089C21.0413 13.8089 20.8005 13.6605 20.6353 13.4768L20.6285 10.8553C20.8074 10.6504 21.0551 10.509 21.4473 10.509C22.0735 10.509 22.507 11.2298 22.507 12.1554C22.507 13.1023 22.0803 13.8089 21.4473 13.8089ZM29.6289 12.1766C29.6289 10.3677 28.7756 8.94038 27.1448 8.94038C25.5072 8.94038 24.5163 10.3677 24.5163 12.1625C24.5163 14.2894 25.6861 15.3634 27.365 15.3634C28.1839 15.3634 28.8031 15.1726 29.271 14.9041V13.4909C28.8031 13.7312 28.2664 13.8795 27.5852 13.8795C26.9178 13.8795 26.326 13.6393 26.2503 12.8055H29.6151C29.6151 12.7666 29.6176 12.6782 29.6204 12.5763L29.6204 12.5761C29.6243 12.4377 29.6289 12.2743 29.6289 12.1766ZM26.2296 11.5054C26.2296 10.7069 26.7044 10.3748 27.1379 10.3748C27.5576 10.3748 28.0049 10.7069 28.0049 11.5054H26.2296ZM16.5412 9.06052H18.2683V15.2433H16.5412V9.06052ZM14.5803 9.06051L14.6904 9.5834C15.0963 8.82026 15.9014 8.97572 16.1216 9.06051V10.6857C15.9083 10.608 15.2202 10.509 14.8142 11.0531V15.2433H13.094V9.06051H14.5803ZM11.2498 7.52717L9.57081 7.8946L9.56392 13.5545C9.56392 14.6003 10.3277 15.3705 11.3461 15.3705C11.9103 15.3705 12.3232 15.2645 12.5503 15.1373V13.7029C12.3301 13.7947 11.2429 14.1198 11.2429 13.074V10.5656H12.5503V9.0605H11.2429L11.2498 7.52717ZM7.1832 10.4737C6.8185 10.4737 6.59831 10.5797 6.59831 10.8553C6.59831 11.1562 6.97726 11.2885 7.4474 11.4527C8.21383 11.7204 9.22258 12.0728 9.22685 13.3779C9.22685 14.6427 8.24287 15.3705 6.81162 15.3705C6.21986 15.3705 5.57304 15.2504 4.93311 14.9677V13.286C5.51112 13.611 6.2405 13.8513 6.81162 13.8513C7.19696 13.8513 7.4722 13.7453 7.4722 13.4203C7.4722 13.087 7.0614 12.9346 6.56547 12.7507C5.81018 12.4706 4.85742 12.1173 4.85742 10.9401C4.85742 9.6894 5.78636 8.9404 7.1832 8.9404C7.75432 8.9404 8.31856 9.03225 8.88968 9.26543V10.926C8.36673 10.6362 7.70615 10.4737 7.1832 10.4737Z"
                fill="#6461FC"
            />
        </svg>
    );
};

export default StripeIcon;
