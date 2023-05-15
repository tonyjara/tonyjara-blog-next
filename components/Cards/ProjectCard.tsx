import {
  Box,
  Text,
  Flex,
  Stack,
  useColorModeValue,
  useColorMode,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";

interface FeatureProps {
  title: string;
  text: string;
  logoUrl: string;
  tech: string;
  href: string;
  repoLink?: string;
  docuLink?: string;
  footer?: string;
}

const ProjectCard = ({
  title,
  text,
  logoUrl,
  tech,
  href,
  repoLink,
  docuLink,
  footer,
}: FeatureProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
    >
      <Stack p={6}>
        <Flex as={"a"} href={href} target="_blank" w={16} h={16}>
          <Image
            height={100}
            width={100}
            src={logoUrl}
            alt={`Logo for ${title}`}
          />
        </Flex>
        <Text as={"a"} href={href} target="_blank" fontWeight={"bold"}>
          {title}
        </Text>
        <Text color={"gray.500"}>{text}</Text>
        <Text fontWeight={"bold"} color={"gray.600"}>
          Tech stack:
        </Text>
        <Text color={"gray.500"}>{tech}</Text>
        <Text color={"gray.500"}>{footer}</Text>
      </Stack>
      <HStack mb="20px" ml="20px" spacing={2}>
        {repoLink && (
          <Link
            color={isDark ? "#FFFF" : "#000"}
            target="_blank"
            href={repoLink}
          >
            <Icon fontSize={{ base: "xl", md: "4xl" }} as={FaGithub} />
          </Link>
        )}

        {docuLink && (
          <Link
            color={isDark ? "#FFFF" : "#000"}
            target="_blank"
            href={docuLink}
          >
            <Icon fontSize={{ base: "xl", md: "4xl" }} as={CgLoadbarDoc} />
          </Link>
        )}
      </HStack>
    </Box>
  );
};

export default ProjectCard;
