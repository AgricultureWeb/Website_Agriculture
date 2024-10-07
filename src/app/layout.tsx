import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

const readex = Readex_Pro({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Krushi Saathi",
  description:
    "Krushi Saathi is a platform for farmers to get information about farming with AI powerd suggestions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
      </head>
      <body className={readex.className}>{children}</body>
    </html>
  );
}
