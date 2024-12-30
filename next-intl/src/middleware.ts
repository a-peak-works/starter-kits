import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { NextFetchEvent, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

function isLocale(locale: string | undefined) {
  return locale
    ? (routing.locales as readonly string[]).includes(locale)
    : false;
}

export const middleware = async (
  req: NextRequestWithAuth,
  event: NextFetchEvent,
) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);

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
  const intlMiddleware = createIntlMiddleware(routing);

  return intlMiddleware(req);
};

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)", "/(de|en)/:path*"],
};
