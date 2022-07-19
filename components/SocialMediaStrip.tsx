import { Stack, Icon, Link, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { socialMediaLinks } from '../lib/constants';

const SocialMediaStrip = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Stack
      // display={{ base: 'none', md: 'block' }}
      direction={'row'}
      spacing={4}
    >
      <Link color="#833AB4" target="_blank" href={socialMediaLinks.instagram}>
        <Icon fontSize={'xl'} as={FaInstagram} />
      </Link>
      <Link color={'#1DA1F2'} target="_blank" href={socialMediaLinks.twitter}>
        <Icon fontSize={'xl'} as={FaTwitter} />
      </Link>
      {/* <Link color="#FF0000" target="_blank" href={socialMediaLinks.youtube}>
        <Icon fontSize={'xl'} as={FaYoutube} />
      </Link> */}
      <Link
        color={isDark ? '#FFFF' : '#000'}
        target="_blank"
        href={socialMediaLinks.github}
      >
        <Icon fontSize={'xl'} as={FaGithub} />
      </Link>
    </Stack>
  );
};

export default SocialMediaStrip;
