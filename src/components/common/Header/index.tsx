'use client';
import './Header.css';
import { useSession } from 'next-auth/react';

function Header(props: any) {
    const {data: session} = useSession();

    return (
        <div className='header'>
            { session && `Welcome ${session?.user.firstName}`}
            {props.children}
        </div>
    );
}

export default Header;