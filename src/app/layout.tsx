import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoanTube: Dashboard",
  description: "Web site created using create-react-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ioc" />
        <title>{String(metadata.title ?? "Default Title")}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
