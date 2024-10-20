import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="dash_rows_side">
            <div className="dash_rows_side_logo">
                <Link to={"/dashboard"} ><img src="/src/assets/icon_dashlogo.svg" alt="" /></Link>
            </div>
            <div className="dash_rows_side_menu">
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/dashboard"}><div><img src="/src/assets/icon_dashboard.svg" alt="" /><span>Dashboard</span></div></Link>
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/live"}><div><img src="/src/assets/icon_live.svg" alt="" /><span>Live</span></div></Link>
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/reports"}><div><img src="/src/assets/icon_report.svg" alt="" /><span>Reports</span></div></Link>
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/jobs"}><div><img src="/src/assets/icon_jobs.svg" alt="" /><span>Jobs</span></div></Link>
                <Link style={{ color: "#B0BCD0", textDecoration: "none" }} to={"/users"}><div><img src="/src/assets/icon_users.svg" alt="" /><span>Users</span></div></Link>
            </div>
            <div className="dash_rows_side_logout">
                <div><img src="/src/assets/icon_logout.svg" alt="" /><span>Logout</span></div>
            </div>
        </div>
    )
}
