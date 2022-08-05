import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'components/header/Header';
import BottomNavigation from 'components/header/BottomNavigation';
import { ProvideAuth } from '@lib/Auth';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth>
      <Header />
      <main className='h-full w-full'>
        <Component {...pageProps} />
      </main>
      <BottomNavigation />
    </ProvideAuth>
  );
}

export default MyApp;
