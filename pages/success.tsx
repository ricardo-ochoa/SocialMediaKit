import React from 'react'
import { Grid, GridItem, VStack, Container, Box, Image, Stack, Text, Button, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import Link from 'next/link';

export const success = () => {
  return (
      <Stack mt={40}>
        <Stack  mb={-8} display="flex" justifyContent="center" alignItems="center">
            <Text className='tittlesuccess' position={"absolute"} zIndex={3}> Compra Exitosa </Text>
            <Image
           
            w="290px"
            src='https://res.cloudinary.com/dnxxkvpiz/image/upload/v1652156945/Socialemediakit/tape_aoo4or.png'
            alt='success'
            zIndex={2}
            />
            
        </Stack>  

        <VStack alignContent={"center"}>
            <Box  boxSize='sm' bgColor="white" borderRadius={"2rem"} w="410px" >
                <Text
                w={"100%"}
                pl={10}
                pt={16}
                pr={10}
                >Se envió un email con el acceso a tus plantillas, no olvides revisar la bandeja de spam.</Text>
                
                <Text
                w={"100%"}
                pl={10}
                pt={3}
                >Cualquier duda contacta en: </Text>

                <UnorderedList pl={10} pt={3} >
                <ListItem><a href='mailto:socialmkit@gmail.com'> socialmkit@gmail.com </a></ListItem>
                <ListItem><a href='https://wa.me/529931433105'  target="_blank"> WhatsApp </a></ListItem>
                </UnorderedList>

                <Button alignSelf="flex-end" ml={10} mt={10}>
                    <Link href="/" passHref>
                        <a>Regresar al Home</a>
                    </Link></Button>

            </Box>
        </VStack>

      </Stack>
  )
}
export default success