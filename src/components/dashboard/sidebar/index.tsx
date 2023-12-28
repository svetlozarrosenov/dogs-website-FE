'use client';
import { useCurrentUser } from '@/hooks';
import './sidebar.css';
import Link from 'next/link';
import Shell from '@/components/common/shell';

function Sidebar() {
    const { data: currentUser } = useCurrentUser();

    return (
        <div className="sidebar">
            <Shell>
                <nav className="sidebar__nav">
                    <ul>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        {<li>
                            <Link href="/search">Search</Link>
                        </li>}
                        {<li>
                            <Link href="/my-posters">My Posters</Link>
                        </li>}
                        <li>
                            <Link href="/history">History</Link>
                        </li>
                        {<li>
                            <Link href="/pages">Pages</Link>
                        </li>}
                        {<li>
                            <Link href="/posts">Posts</Link>
                        </li>}
                    </ul>
                </nav>
            </Shell>
        </div>
    )
}
export default Sidebar;