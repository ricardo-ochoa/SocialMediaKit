import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';
import Script from 'next/script';

interface Props {
  title?: string
  color: string
  children:
  | React.ReactChild
  | React.ReactChild[];
}


export const Layout: FC<Props> = ({ children, title, color }) => {
  return (
      <>
        <Head>
          <title>Social Media Kit</title>
          <meta name="Social Media Kit" content="Kit para redes sociales" />
          <link rel="icon" href="/favicon.ico" />

          
      </Head>

        <Navbar color={color}/>

        <main style={{
          padding: '0px 20px'
        }}>

            { children }
        </main>

        <Script src="https://js.stripe.com/v3/" strategy="lazyOnload"></Script>
      </>
  )
};
