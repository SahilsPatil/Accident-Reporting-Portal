import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function SideBar() {
    const { logout, user } = useAuth();
    return (
        <div className="dash_rows_side">
            <div className="dash_rows_side_logo">
                <Link to={"/dashboard"} ><img src="/src/assets/icon_dashlogo.svg" alt="" /></Link>
            </div>
            <div className="dash_rows_side_menu">
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/dashboard"}><div><img src="/src/assets/icon_dashboard.svg" alt="" /><span>Dashboard</span></div></Link>
                {user.role=='admin' || user.role=='police'?<Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/live"}><div><img src="/src/assets/icon_live.svg" alt="" /><span>Live</span></div></Link>:true}
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/reports"}><div><img src="/src/assets/icon_report.svg" alt="" /><span>Reports</span></div></Link>
                {user.role=='admin'?<Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/jobs"}><div><img src="/src/assets/icon_jobs.svg" alt="" /><span>Jobs</span></div></Link>:true}
                {user.role!='public' && user.role!='admin'?<Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/emergencyservices"}><div><img src="/src/assets/icon_jobs.svg" alt="" /><span>Jobs</span></div></Link>:true}
                {user.role=='admin'?<Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/users"}><div><img src="/src/assets/icon_users.svg" alt="" /><span>Users</span></div></Link>:true}
                {user.role=='public'?<Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/public"}><div><img src="/src/assets/icon_users.svg" alt="" /><span>Incident report</span></div></Link>:true}
            </div>
            <div className="dash_rows_side_logout">
                <div onClick={logout}><img src="/src/assets/icon_logout.svg" alt="" /><span>Logout</span></div>
            </div>
        </div>
    )
}
