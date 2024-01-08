import './Bar.css';
import Link from 'next/link';

function Bar() {
    return (
        <div className='my-posters-bar'>
            <Link href="/my-posters/active">Active Posters</Link>

            <Link  href="/my-posters/inactive">Inactive Posters</Link>
        </div>
    )
}

export default Bar;