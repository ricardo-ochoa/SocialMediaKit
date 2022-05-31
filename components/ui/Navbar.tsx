
import { FC } from 'react';
import { ButtonCheckout } from './ButtonCheckout';


interface lineItems {

    color: string

}


export const Navbar:FC<lineItems> = ({ color }) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '50px 50px',

        }}>

            <ButtonCheckout color={ color } copy={ "Comprar Kit"} icon="https://icongr.am/feather/shopping-bag.svg?size=20&color=ffffff"/>
            
            {/* <ButtonCheckout color={ color } copy="Comprar Kit" icon="https://icongr.am/feather/shopping-bag.svg?size=20&color=ffffff"/> */}

        </div>
    )
};
