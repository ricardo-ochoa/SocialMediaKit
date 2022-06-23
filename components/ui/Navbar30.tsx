
import { FC } from 'react';
import { ButtonCheckout30 } from './ButtonCheckout30';


interface lineItems {

    color: string

}


export const Navbar30:FC<lineItems> = ({ color }) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '50px 50px',

        }}>

            <ButtonCheckout30 color={ color } copy={ "Comprar Kit"} icon="https://icongr.am/feather/shopping-bag.svg?size=20&color=ffffff"/>
            
            {/* <ButtonCheckout color={ color } copy="Comprar Kit" icon="https://icongr.am/feather/shopping-bag.svg?size=20&color=ffffff"/> */}

        </div>
    )
};
