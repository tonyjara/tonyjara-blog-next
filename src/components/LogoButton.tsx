import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LOGO from '../public/tj-logo.png';

const LogoButton = () => {
  return (
    <Link href={'/'}>
      <div>
        <Image
          style={{ cursor: 'pointer' }}
          alt="Logo"
          src={LOGO}
          width={35}
          height={35}
        />
      </div>
    </Link>
  );
};

export default LogoButton;
