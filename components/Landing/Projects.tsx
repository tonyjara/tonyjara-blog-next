import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ProjectJurumi from "./Projects/ProjectJurumi";
import ProjectAfuApp from "./Projects/ProjectAfuApp";
import ProjectKuic from "./Projects/ProjectKuic";
import ProjectOpades from "./Projects/ProjectOpades";

const Projects = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "2.5rem", md: "4rem" }}
        mt={{ base: "40px", md: "100px" }}
        mb={{ base: "40px", md: "20px" }}
        textDecor={"underline"}
        textDecorationThickness="from-font"
        letterSpacing={"0.5rem"}
      >
        SELECTED WORK
      </Text>
      <Stack spacing={40}>
        <ProjectJurumi />
        <ProjectAfuApp />
        <ProjectKuic />
        <ProjectOpades />
      </Stack>
    </Box>
  );
};

export default Projects;
