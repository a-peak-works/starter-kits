import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { NextFetchEvent, NextResponse } from "next/server";

const locales = ["en", "de", "ja"] as const;
type Locale = typeof locales[number];
const defaultLocale: Locale = "en";

function isLocale(locale: string | undefined): locale is Locale {
  return locale ? (locales as readonly string[]).includes(locale) : false;
}

export const middleware = async (
  req: NextRequestWithAuth,
  event: NextFetchEvent,
) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  // Extract locale
  const locale = isLocale(pathSegments[0]) ? pathSegments[0] : null;
  // Redirect if no locale is found
  if (!locale) {
    const rewrittenUrl = new URL(`/${defaultLocale}${pathname}`, req.url);
    return NextResponse.redirect(rewrittenUrl, 308);
  }

  // Authentication middleware
  const authMiddleware = withAuth({
    callbacks: {
      authorized: async ({ token }) => {
        const dashboard = pathSegments.includes("dashboard");
        if (dashboard) return !!token;
        return true;
      }, // Auth check
    },
    pages: {
      signIn: "/login",
    },
  });

  // Pass both `req` and `event` to the auth middleware
  const authResponse = await authMiddleware(req, event);

  if (authResponse instanceof NextResponse) {
    return authResponse;
  }

  // Locale middleware
  const intlMiddleware = createIntlMiddleware({
    locales: locales as readonly string[],
    defaultLocale,
  });

  return intlMiddleware(req);
};

export const config = { matcher: ["/((?!_next|api|favicon.ico).*)"] };
