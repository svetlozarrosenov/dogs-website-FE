'use client';
import Sidebar from "@/components/dashboard/sidebar";
import UserGuard from "@/guards/authGuard";

function Dashboard() {
    UserGuard();

    return (
        <div className="dashboard">
            <Sidebar />
        </div>
    )
}
export default Dashboard;