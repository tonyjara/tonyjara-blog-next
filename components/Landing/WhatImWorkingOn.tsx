import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "../Cards/ProjectCard";

export default function WhatImWorkingOn() {
  return (
    <Box display={"flex"} alignItems="center" flexDir={"column"}>
      <Text
        mb={"20px"}
        fontWeight={"bold"}
        fontSize={{ base: "xl", md: "3xl" }}
      >
        Projects I&apos;m working on:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <ProjectCard
          href="https://jurumi.opades.org.py"
          logoUrl="/assets/projects/jurumilogo.png"
          title={"Jurumi"}
          text={
            "Jurumi is designed for non-profits and serves as a management system for donations, memberships, and expense tracking. "
          }
          tech="Azure Storage, Vms and Postgres Dbs, NextJs, Next-auth, Docusaurus, nestJs. "
          footer="Repo and docs below."
          repoLink="https://github.com/tonyjara/opades-sys"
          docuLink="https://docs.opades.org.py"
        />
        <ProjectCard
          href="https://opades.org.py"
          logoUrl="/assets/projects/opadeslogo.png"
          title={"Opades"}
          text={"Conservation Ngo website."}
          tech="NextJs with self-hosted wordpress as cms and sendgrid smtp."
        />
        <ProjectCard
          href="https://www.instagram.com/arsenalcue/"
          logoUrl="/assets/projects/arselogo.jpeg"
          title={"Afu-app"}
          text={
            "In-house application made for customer and ticket management. (App access not public.)"
          }
          tech="React SPA with firebase and firestore."
        />
        <ProjectCard
          href="https://kuic.pro"
          logoUrl="/assets/projects/kuiclogo.png"
          title={"Kuic"}
          text={
            "Tools for businesses, such as inventory management, invoice printer, sales management, warehouse management and more."
          }
          tech="React SPA Full-stack firebase app with gcp functions, sendgrid template emails and automatic-debit integration (Bancard)."
        />
      </SimpleGrid>
    </Box>
  );
}
