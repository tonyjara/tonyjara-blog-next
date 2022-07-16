import '@fontsource/nunito';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import NavbarLayout from '../layouts/NavbarLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavbarLayout>
        <Component {...pageProps} />
      </NavbarLayout>
    </ChakraProvider>
  );
}

export default MyApp;
