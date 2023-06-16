import React, { ReactNode } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import DarkModeButton from "../components/Buttons/DarkModeButton";
import TinyLogoButton from "../components/Buttons/TinyLogoButton";
import Link from "next/link";

const NavbarLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box px={{ base: 5, md: 10 }}>
      <Box id="top" width="100%" zIndex={3}>
        <Flex
          minH={"60px"}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <TinyLogoButton />
          <div>
            <Link href="/blog">
              <Button fontSize={"xl"} variant={"ghost"}>
                Blog
              </Button>
            </Link>
            <DarkModeButton />
          </div>
        </Flex>
      </Box>
      <Box minH="100vh" display={"flex"} justifyContent={"center"}>
        <Box maxW={"1400"}>{children}</Box>
      </Box>
    </Box>
  );
};

export default NavbarLayout;
