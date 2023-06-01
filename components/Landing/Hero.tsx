import { Button, Icon, Box, Text } from "@chakra-ui/react";
import React from "react";

const HeroPage = () => {
  return (
    <Box
      mt="20px"
      mb="20px"
      textAlign="center"
      alignItems={"center"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text
        fontSize={{
          base: "2xl",
          md: "5xl",
        }}
        fontWeight="bold"
        mb={"20px"}
        lineHeight="none"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        Hi, I&apos;m Tony Jara <br />
      </Text>
      <Text
        bgClip="text"
        lineHeight="none"
        bgGradient="linear(to-r, green.400,purple.500)"
        fontWeight="extrabold"
        fontSize={{
          base: "3xl",
          md: "6xl",
        }}
        mb={"20px"}
      >
        Fullstack Javascript Dev
      </Text>{" "}
      <Button
        as="a"
        mb={"20px"}
        href="mailto:nytojara@gmail.com"
        colorScheme="gray"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        maxW="260px"
        size="lg"
        cursor="pointer"
        className="glow-on-hover"
      >
        Contact me
        <Icon boxSize={5} ml={1} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clipRule="evenodd"
          />
        </Icon>
      </Button>
      <Text
        mb={"20px"}
        fontSize={{ md: "3xl", base: "xl" }}
        fontWeight={"bold"}
        fontStyle={"italic"}
      >
        OPEN TO WORK
      </Text>
    </Box>
  );
};

export default HeroPage;
