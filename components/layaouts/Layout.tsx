import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';
import Script from 'next/script';

interface Props {
  title?: string;
  children:
  | React.ReactChild
  | React.ReactChild[];
}


export const Layout: FC<Props> = ({ children, title }) => {
  return (
      <>
        <Head>
          <title>Social Media Kit</title>
          <meta name="Social Media Kit" content="Kit para redes sociales" />
          <link rel="icon" href="/favicon.ico" />

          
      </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>

            { children }
        </main>

        <Script src="https://js.stripe.com/v3/" strategy="lazyOnload"></Script>
      </>
  )
};
