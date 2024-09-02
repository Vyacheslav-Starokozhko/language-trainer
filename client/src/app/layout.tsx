import { Poppins } from 'next/font/google';
import "./globals.scss";
import StoreProvider from "@/app/StoreProvider";
import AddItem from "@/Components/AddItem/AddItem";
import React from "react";
import Save from "@/Components/Save/Save";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Page Title',
  description: 'Page Description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html className={`${poppins.variable}`}>
        <StoreProvider>
          <body>
          {children}
          <Save/>
          <AddItem/>
          </body>
        </StoreProvider>
      </html>
  );
}
