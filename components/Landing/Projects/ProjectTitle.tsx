import { Flex, Heading, Link, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface props {
  title: string;
  imageSrc: string;
  alt: string;
  websiteUrl?: string;
}

const ProjectTitle = ({ websiteUrl, title, imageSrc, alt }: props) => {
  const smImageSize = useBreakpointValue({ base: 50, md: 70 });
  return (
    <Flex
      as={websiteUrl ? Link : undefined}
      href={websiteUrl}
      target="_blank"
      gap={"20px"}
      justifyContent={{ base: "initial", lg: "space-between" }}
      alignItems={"center"}
    >
      <Heading
        mt={{ "2xl": "0px", base: "0px" }}
        textTransform={"uppercase"}
        fontSize={{ lg: "5em", md: "6em", base: "3.5em" }}
        fontWeight={"extrabold"}
        letterSpacing={"-2px"}
        lineHeight={{ "2xl": "1", lg: "1", md: "0.9", base: "1" }}
      >
        {title}{" "}
      </Heading>

      <Image
        height={smImageSize}
        width={smImageSize}
        style={{ objectFit: "cover" }}
        src={imageSrc}
        alt={alt}
      />
    </Flex>
  );
};

export default ProjectTitle;
