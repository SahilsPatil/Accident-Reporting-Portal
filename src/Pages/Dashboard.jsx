import React from 'react'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import AccidentTrendGraph from '../Components/AccidentTrendGraph';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const accidentData = [
        { location: 'Area 1', date: '2024-01-01', count: 5 },
        { location: 'Area 2', date: '2024-01-25', count: 3 },
        { location: 'Area 1', date: '2024-01-10', count: 2 },
        { location: 'Area 2', date: '2024-01-17', count: 8 },
        { location: 'Area 3', date: '2024-01-12', count: 8 },
        { location: 'Area 4', date: '2024-01-02', count: 8 },
        { location: 'Area 5', date: '2024-01-18', count: 8 },
        // Add more data
    ];
    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav />
                    <div className='dashboard'>
                        <div className="dashboard_boxes">
                            <Link to={"/reports"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Total Reports
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    100
                                </div>
                            </Link>
                            <Link to={"/reports"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Open
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    010
                                </div>
                            </Link>
                            <Link to={"/reports"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Resolved
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    065
                                </div>
                            </Link>
                            <Link to={"/reports"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Recent
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    005
                                </div>
                            </Link>
                        </div>
                        <div className="dashboard_row">
                            <div className="dashboard_causes">
                                <div className="dashboard_causes_title">
                                    Accident Causes
                                </div>
                                <div className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_car.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                        023
                                    </div>
                                </div>
                                <div className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_truck.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                        073
                                    </div>
                                </div>
                                <div className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_bus.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                        017
                                    </div>
                                </div>
                                <div className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_bike.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                        002
                                    </div>
                                </div>
                            </div>
                            <AccidentTrendGraph data={accidentData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
