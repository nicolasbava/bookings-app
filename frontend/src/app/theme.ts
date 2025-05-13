"use client"; 

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800", "900"],
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
        100: '#F9FBFF',
        300: '#777E90'
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },

});

export default theme;
