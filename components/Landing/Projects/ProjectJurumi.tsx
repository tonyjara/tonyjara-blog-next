import {
    Flex,
    Text,
    Box,
    Heading,
    Button,
    Icon,
    useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgLoadbarDoc } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import ProjectTitle from "./ProjectTitle";

const ProjectJurumi = () => {
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
                        title="Jurumi"
                        alt="Logo for jurumi app"
                        imageSrc="/assets/projects/jurumilogo.png"
                    />

                    <Box maxH={"400px"} hideFrom={"lg"} borderRadius={"10px"} my="40px">
                        <Image
                            priority
                            src={"/assets/projects/mockup-jurumi.jpg"}
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
                        Open-sourced administrative software built to handle a local
                        non-profit projects and memberships management. <br />
                        <br /> Designed and implemented structured processes for employees
                        to execute project tasks consecutively, notifying team members and
                        integrating with existing protocols.
                        <br />
                        <br /> Established reliable systems to store and search invoices and
                        documents based on serverless Azure SQL database PostgreSQL.
                        <br />
                        <br />
                        Built and deployed a documentation page ( https://docs.opades.org.py
                        ) with video tutorials for users to learn how to use the software.
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
                        href={"https://github.com/tonyjara/Jurumi"}
                        leftIcon={
                            <Icon borderEndRadius={"20%"} fontSize={"xl"} as={FaGithub} />
                        }
                        variant={"ghost"}
                        fontSize={"xl"}
                    >
                        Repository{" "}
                    </Button>
                    <Button
                        as={Link}
                        target="_blank"
                        href={"https://docs.opades.org.py"}
                        leftIcon={
                            <Icon borderEndRadius={"20%"} fontSize={"xl"} as={CgLoadbarDoc} />
                        }
                        variant={"ghost"}
                        fontSize={"xl"}
                    >
                        Documentation{" "}
                    </Button>
                </Box>
            </Box>
            <Box
                hideBelow={"lg"}
                borderRadius={"10px"}
                flex={"2 0 0px"}
                flexDir={"column"}
            >
                <Image
                    priority
                    src={"/assets/projects/mockup-jurumi.jpg"}
                    style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        objectPosition: "0% 5%",
                        maxHeight: "700px",
                    }}
                    width={1000}
                    height={1000}
                    alt="Group of people using the Jurumi software"
                />
            </Box>
        </Flex>
    );
};

export default ProjectJurumi;
