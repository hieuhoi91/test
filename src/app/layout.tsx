'use client';

import Layout from '@/components/layout';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '500', subsets: ['devanagari'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
