import { Button, Image } from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'
import { checkout } from '../../checkout'

export const ButtonCheckout = ({color, copy, icon}) => {

    const [product, setProduct] = useState(process.env.NEXT_PUBLIC_PRODUCT_RED)

    const red = "#FF5757"
    const green = "#00DA23"
    const black = "#000000"
    const pink = "#E31CB8"
    const purple = "#5827C1"
    const aqua = "#65D8D1"

    useEffect(() => {
        switch (color) {
            case red:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_RED)
                break;
            case green:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_GREEN)
                break;            
            case black:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_BLACK)
                break;            
            case pink:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_PINK)
                break;            
            case purple:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_PURPLE)
                break;  
            case aqua:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_AQUA)
                break;
        
            default:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_RED);
        }
    }, [color])
    

  return (
        <Button
        style={{ backgroundColor:`${ color }` }}
        rightIcon={<Image src={icon} alt='cart' style={`${color}` === "#65D8D1" ? { color:'black'} : {color:'white'} }/>}

        onClick={(() => {
            checkout ({
                lineItems: [
                    {
                        price: `${product}`,
                        quantity: 1
                    }
                ]
            })
        })}
        >
        <h2 style={{ color:'white' }}  >{copy}</h2>
        </Button>
  )
}