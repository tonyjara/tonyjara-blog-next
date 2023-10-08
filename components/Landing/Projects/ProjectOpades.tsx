import { Flex, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ProjectTitle from "./ProjectTitle";
import Link from "next/link";

const ProjectOpades = () => {
  const mdImageBreakPoints = useBreakpointValue({ base: "200px", md: "400px" });
  const websiteUrl = "https://opades.org.py";

  return (
    <Flex
      mt={{ base: "10px", md: "30px" }}
      alignItems={{ base: "center", md: "start" }}
      flexDir={{ lg: "row", base: "column" }}
      display={"flex"}
      justifyContent={{ md: "space-between", base: "center" }}
      gap={{ lg: "100px", base: "30px" }}
    >
      <Box
        as={Link}
        href={websiteUrl}
        cursor={"pointer"}
        hideBelow={"lg"}
        borderRadius={"10px"}
        flex={"2 0 0px"}
        flexDir={"column"}
      >
        <Image
          src={"/assets/projects/opades-monke.jpeg"}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "0% 5%",
            maxHeight: "700px",
          }}
          width={1000}
          height={1000}
          alt="Security guard in front of bar"
        />
      </Box>
      <Box flex={"1 0 0px"} justifyItems={"center"}>
        <Box>
          <ProjectTitle
            title="OPADES"
            alt="logo for nonprofit organization OPADES"
            imageSrc="/assets/projects/opadeslogo.png"
            websiteUrl={websiteUrl}
          />

          <Box
            as={Link}
            href={websiteUrl}
            cursor={"pointer"}
            maxH={"400px"}
            hideFrom={"lg"}
            borderRadius={"10px"}
            my="40px"
          >
            <Image
              src={"/assets/projects/opades-monke.jpeg"}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                objectPosition: "0% 40%",
                maxHeight: mdImageBreakPoints,
              }}
              width={1000}
              height={1000}
              alt="Group of people using the Jurumi software"
            />
          </Box>

          <Text mt={"20px"} fontSize={"xl"}>
            OPADES is my favorite NGO in Paraguay, they have a lot of projects
            related to conservation and education. I&apos;m proud to be able to
            help them through my work.
            <br />
            <br /> This is their landing page, it&apos;s updated through ROWY, a
            CRM built on top of firebase, this enables the team to quickly and
            easily upload changes to the website. <br />
            <br />I used NextJs and everything is staticly rendered, so blogs
            and news articles have excellent SEO. <br />
            <br />
            Other integrations include with JOTFORMS and Sendgrid to manage
            feedback from members and volunteers.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectOpades;
