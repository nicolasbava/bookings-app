"use client"; 

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "swap",
  });
  

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    grey: {
        100: '#F9FBFF'
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
