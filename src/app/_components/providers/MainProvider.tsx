"use client";

import { MantineProvider } from "@mantine/core";
import React, { type ReactNode } from "react";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

interface MainProviderProps {
  children: ReactNode;
}
const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        primaryShade: { dark: 5 },
        colors: {
          blue: [
            "#C2D6FF",
            "#85ADFF",
            "#4785FF",
            "#0A5CFF",
            "#0044CC",
            "#00308F",
            "#00246B",
            "#001847",
            "#000C24",
            "#000714",
          ],
          dark: [
            "#DADEE7",
            "#B3BACC",
            "#8E98B4",
            "#69779B",
            "#4E5974",
            "#353D50",
            "#1C202A",
            "#12151C",
            "#0A0C0F",
            "#040506",
          ],
        },
        fontFamily: "Roboto Mono, monospace",
      }}
    >
      <ModalsProvider>
        {children}
        <Notifications />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default MainProvider;
