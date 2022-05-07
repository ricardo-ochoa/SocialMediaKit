
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { BagIcon }  from './BagIcon'
import { checkout } from '../../checkout'

interface lineItems {

    price: string,
    quantity: number

}


export const Navbar = () => {

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            padding: '50px 50px',

        }}>
     

            <button 

             onClick={(() => {
                 checkout ({
                         lineItems: [
                             {
                                 price: "price_1Kwg8DKdogODcbyyHk89wkh4",
                                 quantity: 1
                             },
                         ]
                 })
             })}
             >
                <h3>Comprar Kit</h3>
            </button>

        </div>
    )
};
