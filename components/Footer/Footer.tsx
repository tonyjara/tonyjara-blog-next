import {
  Box,
  Button,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { repoLink } from '../../lib/constants';
import SocialMediaStrip from '../SocialMediaStrip';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      bg={useColorModeValue('gray.100', 'gray.700')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <SocialMediaStrip />
          <Button
            leftIcon={<FaGithub />}
            as={'a'}
            target="_blank"
            href={repoLink}
            size="sm"
          >
            Clone this blog
          </Button>
          <Text>
            <span className="copyleft">&copy; </span> 2022 All rights
            unreserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
