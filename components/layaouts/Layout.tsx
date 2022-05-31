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

  "@context": string
}


export const Layout: FC<Props> = ({ children, title, color }) => {
  return (
      <>
        <Head>
        <script type="application/ld+json"
               dangerouslySetInnerHTML={{
                __html: JSON.stringify(
{                  "@context": "https://schema.org/", 
                  "@type": "Product", 
                  "name": "Social Media Kit",
                  "image": "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1654019782/Socialemediakit/smkit_nin0sx.gif",
                  "description": "Kit de redes sociales con mas de 365 diseños para tu marca. Disponibles en la plataforma de Canva, listos para usar.",
                  "brand": {
                    "@type": "Brand",
                    "name": "SMK SOCIAL MEDIA KIT"
                  }}
                )
              }}
              key="item-jsonld">
          </script>

          
          <meta name={ title } content="¡Un AÑO de contenido de redes sociales hecho por ti!, Comparte tu contenido único y atractivo todos los días." />

          <title>Paquete para redes sociales</title>
          <meta name="description" content="¡Un AÑO de contenido de redes sociales hecho por ti!, Comparte tu contenido único y atractivo todos los días." />
          <meta name="author" content="Ricardo Ochoa" />
          <meta name="copyright" content="Ricardo @ochoagram" />
          <meta name="robots" content="index"/>

          {/* Facebook <!-- Open Graph data --> */}

          <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
          <meta property="og:type"               content="video.other" />
          <meta property="og:title"              content="Kit para redes sociales" />
          <meta property="og:description"        content="¡Un AÑO de contenido de redes sociales hecho por ti!, Comparte tu contenido único y atractivo todos los días." />
          <meta property="og:image"              content="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1654019782/Socialemediakit/smkit_nin0sx.gif" />
          <meta property="og:image:width"       content="1200"/>
          <meta property="og:image:height"       content="628"/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@ochoagram"/>
          <meta name="twitter:creator" content="@ochoagram"/>
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
function addJsonLd(): { __html: string; } | undefined {
  throw new Error('Function not implemented.');
}

