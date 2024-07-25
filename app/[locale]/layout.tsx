import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@/styles/variables.scss';
import '@/styles/global.scss';
import AppNavbar from '@/components/app-navbar/app-navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { theme } from '@/theme';
import { ScrollCtxProvider } from '@/app/hooks/MenuScrollCtx';
import AppFooter from '@/components/app-footer/app-footer';

export const metadata: Metadata = {
  title: 'tech-prieziura.lt',
  description: '',
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>
            <ScrollCtxProvider>
              <AppNavbar />
              {children}
              <AppFooter />
            </ScrollCtxProvider>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
