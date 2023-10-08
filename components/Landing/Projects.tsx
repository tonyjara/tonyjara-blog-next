import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ProjectJurumi from "./Projects/ProjectJurumi";
import ProjectAfuApp from "./Projects/ProjectAfuApp";
import ProjectKuic from "./Projects/ProjectKuic";
import ProjectOpades from "./Projects/ProjectOpades";
import ProjectPodcastSolutions from "./Projects/ProjectPodcastSolutions";

const Projects = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "2.5rem", md: "4rem" }}
        mt={{ base: "40px", md: "100px" }}
        mb={{ base: "40px", md: "20px" }}
        /* textDecor={"underline"} */
        textDecorationThickness="from-font"
        /* letterSpacing={"0.5rem"} */
      >
        My Recent Work:
      </Text>
      <Stack spacing={40}>
        <ProjectPodcastSolutions />
        <ProjectAfuApp />
        <ProjectJurumi />
        <ProjectKuic />
        <ProjectOpades />
      </Stack>
    </Box>
  );
};

export default Projects;
