'use client';
import Link from 'next/link';
import Cookies from 'js-cookie';
import './Nav.css';
import { useCurrentUser } from '@/hooks';

function Nav () {
    const { data: currentUser, mutate } = useCurrentUser();

    const handleLogout = () => {
        Cookies.remove('jwt');
        mutate(null);
    };

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/search">Search</Link>
                </li>
                {!currentUser && 
                <li>
                    <Link href="/register">Register</Link>
                </li>}
                {!currentUser &&
                <li>
                    <Link href="/login">Login</Link>
                </li>}
                {currentUser && <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>}
                {currentUser && <li>
                    <Link onClick={handleLogout} href="/login">Logout</Link>
                </li>}
            </ul>
        </nav>
    );
}

export default Nav;
