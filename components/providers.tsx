"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import theme from "../styles/theme";
import NavbarLayout from "../layouts/NavbarLayout";
import Footer from "./Footer/Footer";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <NextNProgress height={4} />
        <NavbarLayout>{children}</NavbarLayout>
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  );
}
