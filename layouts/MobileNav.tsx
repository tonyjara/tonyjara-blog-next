import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Stack,
  useColorModeValue,
  useDisclosure,
  Flex,
  Icon,
  Text,
  Collapse,
  Link as ChackraLink,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { NavItem, NAV_ITEMS } from './NavbarData';

export const MobileNav = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onToggle={onToggle} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, onToggle }: NavItem) => {
  const { isOpen } = useDisclosure();

  return (
    <Stack onClick={onToggle}>
      <Link href={href ?? '/'}>
        <Flex
          py={2}
          // as={ChackraLink}
          // href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <ChackraLink key={child.label} py={2} href={child.href}>
                {child.label}
              </ChackraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
