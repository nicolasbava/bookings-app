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
            <Box sx={{padding: '32px 16px', background: '#f9fbff'}} >
              <Box mx={4} my={2}>
                {children}
              </Box>
            </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
