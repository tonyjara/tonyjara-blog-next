import { Flex, Text, Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ProjectTitle from "./ProjectTitle";

const ProjectOpades = () => {
  const mdImageBreakPoints = useBreakpointValue({ base: "200px", md: "400px" });

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
          />

          <Box maxH={"400px"} hideFrom={"lg"} borderRadius={"10px"} my="40px">
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
            Local NGO’s main website built in NextJs, serving static assets
            rendered through ROWY, CRM built on top of firebase to quickly and
            easily upload changes to the website. <br />
            <br /> Blogs and news articles with SEO, easily accesible and
            editable for anyone in the organization. <br />
            <br />
            Integration with JOTFORMS and Sendgrid to manage feedback from
            members and volunteers.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectOpades;
