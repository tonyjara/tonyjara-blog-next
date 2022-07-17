import { ReactElement } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Avatar,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  logoUrl: string;
  tech: string;
  href: string;
}

const Feature = ({ title, text, logoUrl, tech, href }: FeatureProps) => {
  return (
    <Box
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
    >
      <Stack p={6}>
        <Flex as={'a'} href={href} target="_blank" w={16} h={16}>
          <Image
            rounded={8}
            src={logoUrl}
            objectFit="cover"
            alt={`Logo for ${title}`}
          />
        </Flex>
        <Text as={'a'} href={href} target="_blank" fontWeight={'bold'}>
          {title}
        </Text>
        <Text color={'gray.500'}>{text}</Text>
        <Text fontWeight={'bold'} color={'gray.600'}>
          Tech stack:
        </Text>
        <Text color={'gray.500'}>{tech}</Text>
      </Stack>
    </Box>
  );
};

export default function WhatImWorkingOn() {
  return (
    <Box display={'flex'} alignItems="center" flexDir={'column'} p={4}>
      <Text fontWeight={'bold'} pb={20} fontSize={'3xl'}>
        Projects I'm working on:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} maxW={1200} spacing={10}>
        <Feature
          href="https://kuic.pro"
          logoUrl="/assets/projects/kuiclogo.png"
          title={'Kuic'}
          text={
            'Tools for businesses, such as inventory management, invoice printer, sales management, warehouse management and more.'
          }
          tech="React SPA Full-stack firebase app with gcp functions, sendgrid template emails and automatic-debit integration (Bancard)."
        />
        <Feature
          href="https://4ngos.org"
          logoUrl="/assets/projects/4ngos.png"
          title={'4ngos'}
          text={
            "Patreon like platform to manage memberships, notifications via email and automatic debit on ngo's. (In the making)"
          }
          tech="NextJs with Postgres, Next-auth, self-hosted postal smtp server."
        />
        <Feature
          href="https://opades.org.py"
          logoUrl="/assets/projects/opadeslogo.png"
          title={'Opades'}
          text={'Conservation Ngo website.'}
          tech="NextJs with self-hosted wordpress as cms and sendgrid smtp."
        />
        <Feature
          href="https://www.instagram.com/arsenalcue/"
          logoUrl="/assets/projects/arselogo.jpeg"
          title={'Afu-app'}
          text={
            'In-house application made for customer and ticket management. (App access not public.)'
          }
          tech="React SPA with firebase and firestore."
        />
      </SimpleGrid>
    </Box>
  );
}
