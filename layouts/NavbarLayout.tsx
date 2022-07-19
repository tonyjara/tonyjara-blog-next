import React, { ReactElement } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Flex,
  Stack,
  Collapse,
  Box,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import DarkModeButton from '../components/Buttons/DarkModeButton';
import TinyLogoButton from '../components/Buttons/TinyLogoButton';
import SocialMediaStrip from '../components/SocialMediaStrip';

const NavbarLayout: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Box
        position={'fixed'}
        width="100%"
        zIndex={3}
        // backgroundColor={'white'}
      >
        <Flex
          bg={useColorModeValue('gray.100', 'gray.700')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 10 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          justifyContent="space-between"
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            alignItems="center"
            justify={{ base: 'center', md: 'start' }}
          >
            <TinyLogoButton />
          </Flex>

          <DesktopNav />

          <Stack
            flex={{ base: 1, md: 1 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            alignItems="center"
          >
            <Box display={{ base: 'none', md: 'block' }}>
              <SocialMediaStrip />
            </Box>
            <DarkModeButton />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav onToggle={onToggle} />
        </Collapse>
      </Box>
      <Box pt={'65px'}>{children}</Box>
    </div>
  );
};

export default NavbarLayout;
