import React, { ReactElement } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Flex,
  Stack,
  Button,
  Collapse,
  Box,
  IconButton,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import Link from 'next/link';
import DarkModeButton from '../components/Buttons/DarkModeButton';
import TinyLogoButton from '../components/Buttons/TinyLogoButton';

const NavbarLayout: React.FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Box position={'fixed'} width="100%" zIndex={2} backgroundColor={'white'}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
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
          >
            <DarkModeButton />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <Box pt={{ base: '60px' }}>{children}</Box>
    </div>
  );
};

export default NavbarLayout;
