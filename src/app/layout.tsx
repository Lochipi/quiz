import "@mantine/core/styles.css";
import "../styles/globals.css";

import { type Metadata } from "next";
import MainProvider from "./_components/providers/MainProvider";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A simple quiz app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
