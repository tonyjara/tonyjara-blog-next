import { Flex, Text, Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ProjectTitle from "./ProjectTitle";

const ProjectAfuApp = () => {
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
          src={"/assets/projects/velvet-rope.webp"}
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
            title="AfuApp"
            alt="logo for Arsenal Cue"
            imageSrc="/assets/projects/arselogo.jpeg"
          />

          <Box maxH={"400px"} hideFrom={"lg"} borderRadius={"10px"} my="40px">
            <Image
              src={"/assets/projects/velvet-rope.webp"}
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
            Web-based, single-page application built for handling a nightclub’s
            customer database, capacity flow, VIP invitations, ticket pricing,
            and event scheduling. <br />
            <br /> Implemented role-based access schema according to each
            employees’ access levels.
            <br />
            <br /> Created an electron app that bridges the browser with a
            ticket printer. The tickets printed serve as tangible proof of
            purchase to the customers. <br />
            <br /> Have registered over 20.000 individual customers with average
            daily traffic of 400 customers.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectAfuApp;
