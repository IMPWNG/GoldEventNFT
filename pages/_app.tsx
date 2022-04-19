import '../css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import LayoutWrapper from '../components/LayoutWrapper';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

function getLibrary(provider: any) {
  return new ethers.providers.Web3Provider(provider);
}

export default function App({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider attribute="class">
        <Head>
          <title>GoldEvent</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}
