import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    localePrefix: "as-needed",
    locales: ["en", "de"],
    defaultLocale: "en",
    pathnames: {
        "/": "/",
        "/login": {
            en: "/login",
            de: "/anmelden",
        },
        "/signup": {
            en: "/signup",
            de: "/registrieren",
        },
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createNavigation(routing);
