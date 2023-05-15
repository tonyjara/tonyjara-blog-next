import React, { ReactNode } from "react";
import {
  Flex,
  Box,
  useColorModeValue,
  Container,
  Button,
} from "@chakra-ui/react";
import DarkModeButton from "../components/Buttons/DarkModeButton";
import TinyLogoButton from "../components/Buttons/TinyLogoButton";
import Link from "next/link";

const NavbarLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box position={"fixed"} width="100%" zIndex={3}>
        <Flex
          bg={useColorModeValue("gray.100", "gray.700")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 5, md: 10 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justifyContent="space-between"
        >
          <TinyLogoButton />
          <div>
            <Link href="/blog">
              <Button>Blog</Button>
            </Link>
            <DarkModeButton />
          </div>
        </Flex>
      </Box>
      <Container maxW="800px" pt={"65px"}>
        {children}
      </Container>
    </>
  );
};

export default NavbarLayout;
