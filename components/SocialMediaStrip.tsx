import { Stack, Icon, useColorMode } from "@chakra-ui/react";

import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { socialMediaLinks } from "../lib/constants";
import Link from "next/link";

const SocialMediaStrip = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack mt={{ base: "10px", md: "10px" }} direction={"row"} spacing={4}>
      <Link target="_blank" href={socialMediaLinks.linkedin}>
        <Icon
          borderEndRadius={"20%"}
          color={"#0072b1"}
          fontSize={{ base: "2xl", md: "4xl" }}
          as={FaLinkedin}
        />
      </Link>

      <Link target="_blank" href={socialMediaLinks.github}>
        <Icon
          color={isDark ? "#FFFF" : "#000"}
          fontSize={{ base: "2xl", md: "4xl" }}
          as={FaGithub}
        />
      </Link>
      <Link target="_blank" href={socialMediaLinks.instagram}>
        <Icon
          className="instagram"
          fontSize={{ base: "2xl", md: "4xl" }}
          as={FaInstagram}
        />
      </Link>
      <Link target="_blank" href={socialMediaLinks.twitter}>
        <Icon
          color={"#1DA1F2"}
          fontSize={{ base: "2xl", md: "4xl" }}
          as={FaTwitter}
        />
      </Link>
    </Stack>
  );
};

export default SocialMediaStrip;
