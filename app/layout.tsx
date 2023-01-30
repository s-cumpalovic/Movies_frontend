"use client";
import "../styles/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@mui/material";
import Navbar from "@/components/Navbar";

const theme = unstable_createMuiStrictModeTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <html>
          <head />
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
