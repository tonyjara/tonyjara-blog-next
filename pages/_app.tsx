import '@fontsource/nunito';
import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import { AppProps } from 'next/app';
import NavbarLayout from '../layouts/NavbarLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress height={4} />
      <NavbarLayout>
        <Component {...pageProps} />
      </NavbarLayout>
    </ChakraProvider>
  );
}

export default MyApp;
