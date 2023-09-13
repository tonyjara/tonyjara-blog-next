import { Text, Flex, Box, useBreakpointValue, Link } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ProjectTitle from "./ProjectTitle";

const ProjectKuic = () => {
  const mdImageBreakPoints = useBreakpointValue({ base: "200px", md: "400px" });
  const websiteUrl = "https://kuic.pro";
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
            websiteUrl={websiteUrl}
            title="Kuic"
            alt="Logo for Kuic app"
            imageSrc="/assets/projects/kuiclogo.png"
          />

          <Box
            as={Link}
            href={websiteUrl}
            target="_blank"
            maxH={"400px"}
            hideFrom={"lg"}
            borderRadius={"10px"}
            my="40px"
          >
            <Image
              src={"/assets/projects/kuic-mockup.jpg"}
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
            App built for Paraguayan small business owners’ inventory and sales
            needs. <br />
            <br /> Created with React and Firebase, providing real-time updates
            on purchases. <br />
            <br /> Subscription-based with automatic debit integration cron jobs
            based on local API (Bancard). <br />
            <br /> Handles thousands of sales daily and delivers customized
            email reports to each customer.{" "}
          </Text>
        </Box>
      </Box>

      <Box
        as={Link}
        href={websiteUrl}
        target="_blank"
        hideBelow={"lg"}
        borderRadius={"10px"}
        flex={"2 0 0px"}
        flexDir={"column"}
      >
        <Image
          src={"/assets/projects/kuic-mockup.jpg"}
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

export default ProjectKuic;
