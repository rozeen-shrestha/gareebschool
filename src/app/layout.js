"use client"; // Client component

import { useEffect } from 'react';
import localFont from 'next/font/local';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext'; // Import the provider
import TranslateButton from '@/components/TranslateButton'; // Ensure correct import

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <TranslateButton /> {/* Ensure this line is present */}
        </LanguageProvider>
      </body>
    </html>
  );
}
