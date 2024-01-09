'use client';
import Sidebar from "@/components/dashboard/sidebar";
import useLoginGuard from "@/guards/LoginGuard";

function Dashboard() {
    useLoginGuard();
    
    return (
        <div className="dashboard">
            <Sidebar />
        </div>
    )
}
export default Dashboard;