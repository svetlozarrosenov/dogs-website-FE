import { useActivePosters, useInactivePosters } from '@/hooks';
import './Bar.css';
import Link from 'next/link';

function Bar() {
    const {data: activePosters } = useActivePosters();
    const {data: inactivePosters } = useInactivePosters();

    return (
        <div className='my-posters-bar'>
            <Link href="/my-posters/active">Active Posters({activePosters?.length})</Link>

            <Link  href="/my-posters/inactive">Inactive Posters({inactivePosters?.length})</Link>
        </div>
    )
}

export default Bar;