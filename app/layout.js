"use client";

import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { lightTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";

// const inter = Inter({ subsets: ["latin"] });
const Monts = Montserrat({
  subsets: ["latin"],
  weight: ["700", "600", "400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ConsensysAI</title>
        <meta name="description" content="AI Powered Blockchain Consensus" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body className={Monts.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
