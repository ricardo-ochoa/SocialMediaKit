import React from 'react'
import NextLink from 'next/link'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Flex, HStack, Image, ListItem, Stack, Text, UnorderedList, VStack } from '@chakra-ui/react'
import { LinkKit } from '../components/ui';
import Head from 'next/head';


const FourOhFour = () => {
    return <>
      <Head>
          <title>Paquete para redes sociales</title>
          <meta name="description" content="¡Un AÑO de contenido de redes sociales hecho por ti!, Comparta su contenido único y atractivo todos los días." />
          <meta name="author" content="Ricardo Ochoa" />
          <meta name="copyright" content="Ricardo @ochoagram" />
          <meta name="robots" content="index"/>

          {/* Facebook <!-- Open Graph data --> */}

          <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Kit para redes sociales" />
          <meta property="og:description"        content="¡Un AÑO de contenido de redes sociales hecho por ti!, Comparta su contenido único y atractivo todos los días." />
          <meta property="og:image"              content="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1654019782/Socialemediakit/smkit_nin0sx.gif" />


          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@ochoagram"/>
          <meta name="twitter:creator" content="@ochoagram"/>

          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack mt={{lg:20}}>
        <Flex
        alignItems={"center"}
        justifyContent={"center"} p={5}
        display={{ sm: "flex" }}
        direction={{ lg:"row", sm:"column-reverse" }}
        >
          <VStack >
              <Box boxSize='sm' bgColor="white" className='notFoundInfo' maxW={"600px"} w={"100%"} h={{lg:"100%",md:"100%",sm:"150%"}}
                  p={{lg:14, md:10, sm:10}} >
                    <NextLink href="/" passHref>
                        <Flex direction={"row"} cursor={"pointer"} className='backlink'>
                            <span>
                                    <Image mr={1} src='https://icongr.am/octicons/arrow-left.svg?size=25&color=currentColor' alt='Back'/>
                            </span> 
                            <a>
                                Regresar / Back
                            </a>
                        </Flex>
                    </NextLink>

                    <Text as={"h1"} fontWeight={"600"} fontSize={{lg:"4xl", sm:"3xl"}} mt={5} lineHeight={"2.5rem"}>Page Not Found</Text>
                    
                    <Text
                    mt={5}
                    mb={5}
                    >Lo sentimos, no fue encontrada la página que buscas o no existe, puedes regresar al home o seguir descubriendo nuevos productos.</Text>
        
                <Divider mt={5}></Divider>

                <Text color={ 'black' } as={"h2"} fontWeight={"500"} fontSize={{lg:"2xl", sm:"2xl"}} mt={5} lineHeight={"2rem"}>Nuevos Colores:</Text>
                
                <Box marginTop={ 5 }>
                  <Stack className='colorsStack' flexDirection={{sm:"column", md:"row"}} gap={"1rem"} rowGap={"0.5rem"} alignItems="center" justifyContent="flex-start" >
                    <LinkKit image='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/rojo_bxg7yq.jpg' text='Kit Rojo' color='primary' />
                    <LinkKit image='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/verde_daoy0t.jpg' text='Kit Verde' color='#00DA23' />
                  </Stack>
                  <Stack className='colorsStack' marginTop={ 4 } flexDirection={{sm:"column", md:"row"}} gap={"1rem"} rowGap={"0.5rem"} alignItems="center" justifyContent="flex-start" >
                    <LinkKit image='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/negro_zedwy5.jpg' text='Kit Negro' color='black' />
                    <LinkKit image='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/rosa_xqmhvy.jpg' text='Kit Rosa' color='#E31CB8' />
                  </Stack>
                  <Stack className='colorsStack' marginTop={ 4 } flexDirection={{sm:"column", md:"row"}} gap={"1rem"} rowGap={"0.5rem"} alignItems="center" justifyContent="flex-start" >
                    <LinkKit image='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/purple_y74qft.jpg' text='Kit Morado' color='#5827C1' />
                    <LinkKit image='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883721/Socialemediakit/turquesa_w3btp9.jpg' text='Kit Turquesa' color='#65D8D1' />
                  </Stack>
                </Box>

                <Divider mt={5}></Divider>
                    <Accordion className='acordionsingle' allowMultiple mt={"6"} mb={"1"} bgColor={"#f1f1f1"}>
                        <AccordionItem border={"none"}>

                        <Text>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" className="acordionTitle" >
                                Contact for questions and suggestions
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        </Text>

                        <AccordionPanel pb={4}>
                        <UnorderedList >
                            <ListItem mb={6} mt={6} display={"flex"} flexDirection={"row"}><a href='mailto:socialmkit@gmail.com'> socialmkit@gmail.com </a> <span><Image src='https://icongr.am/feather/arrow-up-right.svg?size=20&color=000000' alt='email contact'></Image></span></ListItem>
                            <ListItem  display={"flex"} flexDirection={"row"}><a href='https://wa.me/529931433105'  target="_blank" rel="noreferrer"> WhatsApp </a><span><Image src='https://icongr.am/feather/arrow-up-right.svg?size=20&color=000000' alt='email contact'></Image></span></ListItem>
                        </UnorderedList>
                        </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
              </Box>
          </VStack>
        </Flex>
      </Stack>

  </>
}

export default FourOhFour;