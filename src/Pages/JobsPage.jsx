import React from 'react'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';

export default function JobsPage() {
    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Assigned Jobs"} />
                    <div className='usermanagement'>
                        <div className="dashboard_users">
                            <div style={{borderBottom:"1px solid #313245", width:"95%"}} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Police Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        Jobs Not Found
                                    </div>
                                </div>
                            </div>
                            <div style={{borderBottom:"1px solid #313245", width:"95%"}} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Fire Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        Jobs Not Found
                                    </div>
                                </div>
                            </div>
                            <div style={{borderBottom:"1px solid #313245", width:"95%"}} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Ambulance Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        Jobs Not Found
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
