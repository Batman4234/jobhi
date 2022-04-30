import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'components/header/Header';
import BottomNavigation from 'components/header/BottomNavigation';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="h-[1300px] w-[1300px] lg:h-full lg:w-full">
        <Component {...pageProps} />
      </main>
    <BottomNavigation />
      </>
  );
}

export default MyApp;
