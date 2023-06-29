import React, { useEffect } from "react";
import NewHero from "../components/Landing/NewHero";
import Projects from "../components/Landing/Projects";
import { Box } from "@chakra-ui/react";

const Index = () => {


    return (
        <Box mb={{ base: "20px", md: "80px" }}>
            <NewHero />
            <Projects />
        </Box>
    );
};

export default Index;
