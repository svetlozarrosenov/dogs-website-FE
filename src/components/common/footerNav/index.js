'use client';
import Link from 'next/link'
import './FooterNav.css';

function FooterNav () {
    return (
        <nav className="footer-nav">
            <ul>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    );
}

export default FooterNav;
