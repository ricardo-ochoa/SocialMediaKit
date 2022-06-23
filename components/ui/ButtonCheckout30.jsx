import { Button, Image } from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'
import { checkout } from '../../checkout'

export const ButtonCheckout30 = ({color, copy, icon}) => {

    const [product, setProduct] = useState(process.env.NEXT_PUBLIC_PRODUCT_RED_30)

    const red = "#FF5757"
    const green = "#00DA23"
    const black = "#000000"
    const pink = "#E31CB8"
    const purple = "#5827C1"
    const aqua = "#65D8D1"

    useEffect(() => {
        switch (color) {
            case red:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_RED_30)
                break;
            case green:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_GREEN_30)
                break;            
            case black:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_BLACK_30)
                break;            
            case pink:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_PINK_30)
                break;            
            case purple:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_PURPLE_30)
                break;  
            case aqua:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_AQUA_30)
                break;
        
            default:
                setProduct(process.env.NEXT_PUBLIC_PRODUCT_RED_30);
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