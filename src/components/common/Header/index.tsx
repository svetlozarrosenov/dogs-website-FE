'use client';
import { useCurrentUser } from '@/hooks';
import './Header.css';

function Header(props: any) {
    const { data: currentUser } = useCurrentUser();

    return (
        <div className='header'>
            { currentUser && `Welcome ${currentUser?.firstName}`}
            {props.children}
        </div>
    );
}

export default Header;