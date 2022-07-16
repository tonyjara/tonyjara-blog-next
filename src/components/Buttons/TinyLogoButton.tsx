import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LOGO from '../../public/tj-logo.png';

const TinyLogoButton = () => {
  return (
    <Link href={'/'}>
      <Flex>
        <Image
          style={{ cursor: 'pointer' }}
          alt="Logo"
          src={LOGO}
          width={40}
          height={40}
        />
      </Flex>
    </Link>
  );
};

export default TinyLogoButton;
