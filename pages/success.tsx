import React from 'react'
import { Grid, GridItem, VStack, Container, Box, Image, Stack, Text, Button, UnorderedList, ListItem, ListIcon, Flex, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Accordion, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';

export const success = () => {
  return (
      <Stack mt={{lg:20, md:10}} >

        <Flex alignItems={"center"} justifyContent={"center"} p={5}
        display={{ sm: "flex" }} direction={{ lg:"row", sm: "column-reverse" }}
        height="100%"
        >
            <VStack boxSize='sm' bgColor="white" className='SuccessContainerInfo' maxW={"600px"} w={"100%"}
                    h="100%"
                    minH={ "600px" }
                    p={{lg:14, md:10, sm:8}} >
                <Box>
                    <Link href="/" passHref>
                        <Flex direction={"row"} cursor={"pointer"}>
                            <span>
                                <Image mr={1} src='https://icongr.am/octicons/arrow-left.svg?size=25&color=currentColor' alt='Back'/>
                            </span> 
                            <a>
                                Regresar / Back
                            </a>
                        </Flex>
                    </Link>

                    <Text as={"h1"} fontWeight={"600"} fontSize={{lg:"4xl", sm:"3xl"}} mt={5} lineHeight={"2.5rem"}>Felicidades / Congratulations</Text>
                    <Text
                    mt={5}
                    mb={5}
                    >Tras el pago, en la dirección de correo electrónico que utilizó para realizarlo recibirá un enlace para descargar sus archivos, no olvides revisar la bandeja de spam.</Text>
                    
                    <Text
                    mb={10}>
                        After payment, the email address you used to make your payment will receive a link to download your files, dont forget to check your spam folder.
                    </Text>


                
                    {/* <Accordion className='acordion1' allowMultiple mt={"6"} mb={"1"} bgColor={"#f1f1f1"}>
                        <AccordionItem border={"none"}>

                        <Text>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" className="acordionTitle">
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
                    </Accordion> */}

                    <Accordion className="acordion2" allowMultiple  bgColor={"#f1f1f1"}>
                        <AccordionItem border={"none"}>

                        <Text>
                        <AccordionButton >
                            <Box flex="1" textAlign="left" className="acordionTitle">
                                Contacto para dudas o sugerencias:
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

            <VStack 
                className='SuccessContainerImage' 
                maxW={"600px"}
            >
                <Box>
                    <Image objectFit={"cover"}
                    w={"100%"}
                    src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1652463763/Socialemediakit/main_success_xhgjhd.jpg'
                    alt='SMK Red' />
                </Box>
            </VStack>
        </Flex>

        <Stack 
        className='franja' 
        overflow={"hidden"} 
        fontSize="30px" 
        textTransform={"uppercase"} 
        bgColor={"black"}
        >
            <Flex>
                <Text flexShrink={"unset"} w="100%" whiteSpace={"nowrap"} className="textanimated" >Disfruta tus plantillas · Enjoy your templates · Disfruta tus plantillas · Enjoy your templates · Disfruta tus plantillas · Enjoy your templates · Disfruta tus plantillas · Enjoy your templates · Disfruta tus plantillas · Enjoy your templates ·</Text>
            </Flex>
        </Stack>

      </Stack>
  )
}
export default success