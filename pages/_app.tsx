import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Header from 'components/header/Header';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
