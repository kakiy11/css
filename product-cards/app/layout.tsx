import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Керамика — коллекция",
  description: "Коллекция керамической посуды и предметов для дома.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
