import React from 'react'
import NavBar from '../Components/NavBar'
import './../Css/AdminDashboard.css';

export default function AdminDashboard() {
    return (
        <div className='dash'>
            <div className="dash_rows">
                {/* SideBar Component */}
                <div className="dash_rows_side">
                    <div className="dash_rows_side_logo">
                        <img src="/src/assets/icon_dashlogo.svg" alt="" />
                    </div>
                    <div className="dash_rows_side_menu">
                        <div><img src="/src/assets/icon_dashboard.svg" alt="" /><span>Dashboard</span></div>
                        <div><img src="/src/assets/icon_live.svg" alt="" /><span>Live</span></div>
                        <div><img src="/src/assets/icon_report.svg" alt="" /><span>Reports</span></div>
                    </div>
                    <div className="dash_rows_side_logout">
                        <div><img src="/src/assets/icon_logout.svg" alt="" /><span>Logout</span></div>
                    </div>
                </div>

                {/* Middle Componets */}
                <div className="mid">
                    <div className="mid_head">
                        Welcome to Admin Dashboard
                    </div>
                </div>
            </div>
        </div>
    )
}
