import '../css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { MoralisProvider } from "react-moralis";
import LayoutWrapper from '../components/LayoutWrapper';
import { AppProps } from 'next/app';
import Meta from '../components/meta/Meta';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      initializeOnMount={false}>
      <ThemeProvider attribute="class" />
      <Meta />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </MoralisProvider>
  );
}
