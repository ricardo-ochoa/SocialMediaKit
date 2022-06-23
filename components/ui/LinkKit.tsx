import React, { FC } from 'react'
import { HStack, Image, Text, Box } from '@chakra-ui/react';
import { transform } from 'framer-motion';
import Link from 'next/link';

interface Props {
    image: string
    text: string
    color: string
}

export const LinkKit:FC<Props> = ({image, text, color}) => {
  return (
      <>
        <Link href="/">
        <HStack
        marginTop="0"
        backgroundColor='#ffffff'
        width={'100%'} h={'70px'}
        borderRadius={'0.5rem'}
        padding={'0.5rem'}
        cursor={"pointer"}
        _hover={{  backgroundColor:"#f2f2f2", transform:'scale(0.98)' }}
        >

            <Image objectFit={"cover"} h={"100%"} borderRadius={'0.5rem'} marginRight={'0.5rem'}
            src = {`${image}`}
            alt = { text } 
            />

            <Text fontWeight={500} color={ color } as={"h3"} fontSize={'1.1rem'}> { text } </Text>

        </HStack>
        </Link>
    </>
  )
}
