import { Button, Image } from '@chakra-ui/react'

import React from 'react'
import { checkout } from '../../checkout'

export const ButtonCheckout = ({copy, icon}) => {
  return (
        <Button
        colorScheme='primary'
        rightIcon={<Image src={icon} alt='cart'/>}


        onClick={(() => {
            checkout ({
                    lineItems: [
                        {
                            price: process.env.NEXT_PUBLIC_PRODUCT,
                            quantity: 1
                        },
                    ]
            })
        })}
        >
        <h4>{copy}</h4></Button>
  )
}
