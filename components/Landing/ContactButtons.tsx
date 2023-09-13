import {
  Stack,
  Icon,
  useColorMode,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { socialMediaLinks } from "../../lib/constants";
import { FiMail } from "react-icons/fi";
import { leafColors } from "../../styles/theme";

const ContactButtons = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const accentColor = useColorModeValue(
    leafColors.accentLight,
    leafColors.accentDark
  );
  return (
    <>
      <Box
        mt="20px"
        maxW={{ base: "650px" }}
        hideBelow="md"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Button
          as={Link}
          target="_blank"
          href={socialMediaLinks.linkedin}
          leftIcon={
            <Icon borderEndRadius={"20%"} fontSize={"xl"} as={FaLinkedin} />
          }
          variant={"ghost"}
          fontSize={"xl"}
        >
          LinkedIn
        </Button>
        <Button
          as={Link}
          target="_blank"
          href={"mailto:nytojara@gmail.com"}
          leftIcon={<Icon color={accentColor} fontSize={"xl"} as={FiMail} />}
          fontSize={"xl"}
          variant={"ghost"}
        >
          nytojara@gmail.com
        </Button>
        <Button
          as={Link}
          target="_blank"
          href={socialMediaLinks.github}
          leftIcon={<Icon color={accentColor} fontSize={"xl"} as={FaGithub} />}
          variant={"ghost"}
        >
          Repos
        </Button>
      </Box>
      <Stack
        display={"flex"}
        justifyContent={"space-between"}
        mt="30px"
        hideFrom="md"
        direction={"row"}
        spacing={8}
        px="5px"
      >
        <Link target="_blank" href={socialMediaLinks.linkedin}>
          <Icon
            borderEndRadius={"20%"}
            fontSize={{ base: "3xl", md: "4xl" }}
            as={FaLinkedin}
          />
        </Link>

        <Link target="_blank" href={"mailto:nytojara@gmail.com"}>
          <Icon
            color={isDark ? "#FFFF" : "#000"}
            fontSize={{ base: "3xl", md: "4xl" }}
            as={FiMail}
          />
        </Link>
        <Link target="_blank" href={socialMediaLinks.github}>
          <Icon
            color={isDark ? "#FFFF" : "#000"}
            fontSize={{ base: "3xl", md: "4xl" }}
            as={FaGithub}
          />
        </Link>
      </Stack>
    </>
  );
};

export default ContactButtons;
