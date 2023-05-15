"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { repoLink } from "../../lib/constants";
import SocialMediaStrip from "../SocialMediaStrip";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <SocialMediaStrip />
          <Button
            leftIcon={<FaGithub />}
            as={"a"}
            target="_blank"
            href={repoLink}
            size="sm"
          >
            Clone this repo
          </Button>
          <Text>
            <span className="copyleft">&copy; </span> {new Date().getFullYear()}{" "}
            All rights unreserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
