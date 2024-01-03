import { ClerkProvider } from '@clerk/nextjs';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  title: 'Next.js 14 with Clerk',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore eaque eum placeat incidunt. Ipsam similique sed ad eius magnam?',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500',
        },
      }}
    >
      <html lang='en'>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className='h1-bold'>This is a piece of text</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
