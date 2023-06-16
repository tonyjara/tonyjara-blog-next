import {
  Box,
  Flex,
  Heading,
  Highlight,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { leafColors } from "../../styles/theme";
import ContactButtons from "./ContactButtons";

const NewHero = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const accentColor = useColorModeValue(
    leafColors.accentLight,
    leafColors.accentDark
  );

  return (
    <Flex
      mt={{ base: "10px", md: "30px" }}
      alignItems={{ base: "center", md: "center" }}
      flexDir={{ lg: "row", base: "column" }}
      display={"flex"}
      justifyContent={{ md: "space-between", base: "center" }}
      gap={{ lg: "20px", base: "30px" }}
      height={"100%"}
    >
      <Box flex={"2 0 0px"} justifyItems={"center"}>
        <Heading
          fontSize={{ base: "3.5em", sm: "5.5em", md: "6em", lg: "7em" }}
          letterSpacing={"-2px"}
          mt={{ "2xl": "0px", base: "0px" }}
          textTransform={"uppercase"}
          fontWeight={"extrabold"}
          lineHeight={{ base: "1", md: "0.9", lg: "1", "2xl": "1" }}
        >
          Tony Jara
        </Heading>
        <Heading
          fontSize={{ base: "3.5rem", sm: "5em", md: "5em", lg: "5.9em" }}
          letterSpacing={{
            base: "0px",
            sm: "7px",
            md: "13px",
            lg: "0.155em",
          }}
          textTransform={"uppercase"}
          fontWeight={"thin"}
          lineHeight={{ "2xl": "1", lg: "1", md: "0.9", base: "1" }}
          ml={{ "2xl": "-5px", lg: "-5px", md: "-5px", base: "-4px" }}
          whiteSpace={"nowrap"}
        >
          Front End{" "}
        </Heading>
        <Heading
          fontSize={{ base: "3.5rem", sm: "5em", md: "5em", lg: "6em" }}
          letterSpacing={{ base: "-3px", sm: "3px", md: "9px" }}
          textTransform={"uppercase"}
          fontWeight={"extrabold"}
          lineHeight={{ "2xl": "1", lg: "1", md: "0.9", base: "1" }}
        >
          Developer
        </Heading>
        <ContactButtons />
      </Box>
      <Box
        style={{
          backgroundImage: "url(/assets/background/leaf.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        borderRadius={"10px"}
        padding={"20px"}
        justifySelf="center"
        flex={"1 0 0px"}
        flexDir={"column"}
        maxW={{ base: "310px", sm: "500px", md: "545px", lg: "100%" }}
        minW={{ base: "310px", md: "400px" }}
        ml={{ base: "0px", sm: "-10px", md: "-15px", lg: "0px" }}
      >
        <Heading
          display={"inline"}
          backgroundColor={bgColor}
          boxDecorationBreak={"clone"}
          letterSpacing={{ "2xl": "0px", base: "-2px" }}
          px={"10px"}
          lineHeight={{ md: "65px", base: "45px" }}
          fontSize={{
            base: "3xl",
            sm: "4xl",
            md: "5xl",
            lg: "5xl",
            xl: "3.2rem",
            "2xl": "3.2rem",
          }}
        >
          <Highlight query="design" styles={{ color: accentColor }}>
            &quot;Every great design begins with an even better story.&quot;
          </Highlight>
        </Heading>
        <br />
        <Text
          display={"inline-block"}
          backgroundColor={bgColor}
          boxDecorationBreak={"clone"}
          mt="10px"
          px={"10px"}
          fontWeight={"bold"}
          fontStyle={"italic"}
        >
          -Lorinda Mamo{" "}
        </Text>
      </Box>
    </Flex>
  );
};

export default NewHero;
