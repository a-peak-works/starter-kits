import '@/styles/globals.min.css';
import '@/styles/inter.min.css';
import '@/styles/theme.min.css';
import '@/styles/colors.min.css';
import '@/styles/manrope.min.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Theme } from '@/providers/theme';
import { cx } from '@/components/utils';
import { NextAuthProvider } from '@/providers/next-auth';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});
const geistMono = localFont({
  src: '../../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  themeColor: '#7f56d9',
  colorScheme: 'dark light',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning>
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          'antialiased bg-primary'
        )}>
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider>
            <Theme>{children}</Theme>
          </NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
