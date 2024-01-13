import './Header.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Header = async (props) => {
    const session = await getServerSession(authOptions)

    return (
        <div className='header'>
            { session && `Welcome ${session?.user?.firstName}`}
            {props.children}
        </div>
    );
}

export default Header;