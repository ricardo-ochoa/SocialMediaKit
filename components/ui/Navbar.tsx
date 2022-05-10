
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { BagIcon }  from './BagIcon'
import { checkout } from '../../checkout'
import { ButtonCheckout } from './index';

interface lineItems {

    price: string,
    quantity: number

}


export const Navbar = () => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '50px 50px',

        }}>
     
            <ButtonCheckout copy="Comprar Kit" icon="https://icongr.am/feather/shopping-bag.svg?size=20&color=ffffff"/>

        </div>
    )
};
