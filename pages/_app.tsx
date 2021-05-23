import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import MDXProvider from 'providers/mdx-provider'

const blue = {
  "50": "#E7EDFD",
  "100": "#BCCDFB",
  "200": "#91ADF8",
  "300": "#668DF5",
  "400": "#3B6DF2",
  "500": "#0F4DF0",
  "600": "#0C3EC0",
  "700": "#092E90",
  "800": "#061F60",
  "900": "#030F30"
};

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },
  colors: {
    heroBg: "#040d21",
    brand: blue,
    blue: blue
  }
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,500;1,500&amp;display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default App;