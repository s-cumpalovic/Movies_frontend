'use client'

import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@mui/material";

const theme = unstable_createMuiStrictModeTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html>
        <head />
        <body>
          {children}
          </body>
      </html>
    </ThemeProvider>
  );
}
