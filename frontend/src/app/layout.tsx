"use client"; 

import { ReactNode } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> 
            <Box mx={4} my={2}>
              {children}
            </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
