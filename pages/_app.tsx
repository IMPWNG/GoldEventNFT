import '../css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import LayoutWrapper from '../components/LayoutWrapper';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { AppProps } from 'next/app';
import Meta from '../components/meta/Meta';

function getLibrary(provider: any) {
  return new ethers.providers.Web3Provider(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider attribute="class" />
      <Meta />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
    </Web3ReactProvider>
  );
}
