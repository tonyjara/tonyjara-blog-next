import { Flex, Text, Box, useBreakpointValue } from "@chakra-ui/react";
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
            Web app built for clubs that manages, in real-time, ticket prices,
            invitations, events, free-passes, reserves, ticket printing, reports
            and more.
            <br />
            <br />
            The app is deployed in production in 2 different clubs. To this day
            it has registered over 30.000 individual customers, with a combined
            average monthly traffic of over 20.000 customers.
            <br />
            <br />
            It was custom built for a growing franchise of nightclubs. The
            monthly maintanence cost for the app is under $5.
          </Text>
        </Box>
      </Box>
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
    </Flex>
  );
};

export default ProjectAfuApp;
