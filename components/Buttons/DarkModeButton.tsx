import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Button } from '@chakra-ui/react';
import React from 'react';
import 'highlight.js/styles/atom-one-dark.css';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // useEffect(() => {
  //   if (colorMode === 'dark') {
  //     require('highlight.js/styles/atom-one-dark.css');
  //   } else {
  //     require('highlight.js/styles/atom-one-light.css');
  //   }

  //   return () => {};
  // }, [colorMode]);

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default DarkModeButton;
