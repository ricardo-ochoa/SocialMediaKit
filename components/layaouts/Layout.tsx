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
        <script type="application/ld+json"
               dangerouslySetInnerHTML={{
                __html: JSON.stringify(
{                  "@context": "https://schema.org/", 
                  "@type": "Product", 
                  "name": "Social Media Kit",
                  "image": "https://res.cloudinary.com/dnxxkvpiz/image/upload/v1654019782/Socialemediakit/smkit_nin0sx.gif",
                  "offers": {
                    "@type": "Offer",
                    "url": "https://socialmediakit.me/",
                    "priceCurrency": "MXN",
                    "price": "1100"
                  },
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

          <meta property="og:url"                content="https://socialmediakit.me" />
          <meta property="og:type"               content="video.other" />
          <meta property="og:title"              content="Kit para redes sociales" />
          <meta property="og:description"        content="¡Un AÑO de contenido de redes sociales hecho por ti!, Comparte tu contenido único y atractivo todos los días." />
          <meta property="og:image"              content="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1654019782/Socialemediakit/smkit_nin0sx.gif" />
          <meta property="og:image:width"       content="1200"/>
          <meta property="og:image:height"       content="628"/>

          {/* Twitter <!-- Open Graph data --> */}
          <meta name="twitter:account_id" content="18ce55hprg3"/>          
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@ochoagram"/>
          <meta name="twitter:creator" content="@ochoagram"/>
          <meta property="twitter:image:src" content="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/rojo_bxg7yq.jpg" />
          <meta property="og:title" content="Social Media Kit" />    
          <meta property="og:description" content="Kit de redes sociales con mas de 365 diseños para tu marca. Disponibles en la plataforma de Canva, listos para usar."/>
          <meta property="twitter:domain" content="socialmediakit.me"/>

          {/* <!-- Pinterest Tag --> */}
          <meta name="p:domain_verify" content="31f7fb4a84f2a1171806ca88da5c63b6"/>

            <script
            dangerouslySetInnerHTML={{ __html:`
            !function(e){if(!window.pintrk){window.pintrk = function () {
            window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
              n=window.pintrk;n.queue=[],n.version="3.0";var
              t=document.createElement("script");t.async=!0,t.src=e;var
              r=document.getElementsByTagName("script")[0];
              r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
            pintrk('load', '2614107730941', {em: '<user_email_address>'});
            pintrk('page');
            />
            <img height="1" width="1" style={{display:"none;"}} alt="Pinterest tag"
              src="https://ct.pinterest.com/v3/?event=init&tid=2614107730941&pd[em]=cc845bc6711d71f01c59161c01dfb202764634b634aec5e0fcf214965b960963&noscript=1"
            />
            
            `}} />

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

