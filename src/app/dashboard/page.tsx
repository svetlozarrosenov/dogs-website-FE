import Sidebar from "@/components/dashboard/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

const Dashboard = async () => {
    const session = await getServerSession(authOptions)

    if ( !session) {
        redirect('/login');
    }

    return (
        <div className="dashboard">
            <Sidebar />
        </div>
    )
}

export default Dashboard;