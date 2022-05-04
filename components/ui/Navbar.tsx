
import Image from 'next/image';
import NextLink from 'next/link';
import { BagIcon }  from './BagIcon'


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
     

            <button >
                <h3>Comprar Kit</h3>
            </button>

        </div>
    )
};
