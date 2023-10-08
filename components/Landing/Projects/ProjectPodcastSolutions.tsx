import {
  Flex,
  Text,
  Box,
  useBreakpointValue,
  useColorMode,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CgLoadbarDoc } from "react-icons/cg";

const ProjectPodcastSolutions = () => {
  const mdImageBreakPoints = useBreakpointValue({ base: "200px", md: "400px" });
  const colorMode = useColorMode().colorMode;
  const smImageSize = useBreakpointValue({ base: 50, md: 70 });
  const websiteUrl = "https://podcastsolutions.org";

  return (
    <Flex
      mt={{ base: "10px", md: "30px" }}
      alignItems={{ base: "center", md: "start" }}
      flexDir={{ lg: "row", base: "column" }}
      display={"flex"}
      justifyContent={{ md: "space-between", base: "center" }}
      gap={{ lg: "100px", base: "30px" }}
    >
      {/* INFO: Big pic */}
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
          src={"/assets/projects/ps-hero.jpeg"}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "0% 5%",
            maxHeight: "700px",
          }}
          width={1000}
          height={1000}
          alt="Woman using computer with headphones on"
        />
      </Box>
      <Box flex={"1 0 0px"} justifyItems={"center"}>
        <Box>
          <Flex
            as={Link}
            href={websiteUrl}
            target="_blank"
            gap={"20px"}
            justifyContent={{ base: "initial", lg: "space-between" }}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Heading
              mt={{ "2xl": "0px", base: "0px" }}
              textTransform={"uppercase"}
              fontSize={{ base: "3em", md: "4em", lg: "4em" }}
              fontWeight={"extrabold"}
              letterSpacing={"-2px"}
              lineHeight={{ "2xl": "1", lg: "1", md: "0.9", base: "1" }}
            >
              Podcast Solutions
            </Heading>

            <Image
              height={smImageSize}
              width={smImageSize}
              style={{ objectFit: "cover" }}
              src={
                colorMode === "light"
                  ? "/assets/projects/ps-logo-black.png"
                  : "/assets/projects/ps-logo-white.png"
              }
              alt={"Podcast Solutions Logo"}
            />
          </Flex>
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
              src={"/assets/projects/ps-hero.jpeg"}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                objectPosition: "0% 40%",
                maxHeight: mdImageBreakPoints,
              }}
              width={1000}
              height={1000}
              alt="Woman using computer with headphones on"
            />
          </Box>

          <Text mt={"20px"} fontSize={"xl"}>
            I love podcasts and I always wanted to really understand the whole
            process of how they work. That&apos;s why I built Podcasts
            Solutions.
            <br />
            <br />
            It&apos;s a Web platform for podcasters to host and manage their
            podcasts.
            <br />
            <br />
            It offers audio to text transcription as well as AI content
            generation and a suite of tools to make managing your podcast as
            easy as possible.
            <br />
            <br />
            It offers a free trial as well as a paid subscription model
            integrated with Stripe.
          </Text>
        </Box>
        <Box
          mt="20px"
          maxW={{ base: "650px" }}
          hideBelow="md"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button
            as={Link}
            target="_blank"
            href={"https://blog.podcastsolutions.org"}
            leftIcon={
              <Icon borderEndRadius={"20%"} fontSize={"xl"} as={CgLoadbarDoc} />
            }
            variant={"ghost"}
            fontSize={"xl"}
          >
            Blog{" "}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectPodcastSolutions;
