import React, { useEffect, useState } from 'react'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import AccidentTrendGraph from '../Components/AccidentTrendGraph';
import { Link, useNavigate } from 'react-router-dom';
import url from '../../backend.json';
// import accidentData2 from './../Json/accidentDetails.json';

export default function Dashboard() {
    const navigate = useNavigate();
    const [accidentData2, setAccidents] = useState([]);
    const [accidentData, setAccidentsSummery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [recentReportCount, setRecentReportCount] = useState(0);

    useEffect(() => {
        // Fetch data from the API
        const fetchAccidents = async () => {
            try {
                const response = await fetch(url.URL+'/api/accidents/'); // Replace with your actual API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch accident data');
                }
                const data = await response.json();
                setAccidents(data); // Assuming the API returns an array of accidents
                console.log(accidentData);

                const now = new Date();
                const recentReports = data.filter(report => {
                    const reportTime = new Date(report.time); // Assume `time` is in a parseable format
                    const diffInHours = (now - reportTime) / (1000 * 60 * 60); // Convert milliseconds to hours
                    return diffInHours <= 5; // Adjust this value for your definition of "recent"
                });
                setRecentReportCount(recentReports.length);
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        const fetchAccidentsSummery = async () => {
            try {
                const response = await fetch(url.URL+'/api/accident-summary/all'); // Replace with your actual API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch accident data');
                }
                const data = await response.json();
        
                // Sort the accidents by date in descending order and take the latest 10 entries
                const recentAccidents = data
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 7);
        
                setAccidentsSummery(recentAccidents); // Set the recent 10 accidents to state
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        

        fetchAccidents();
        fetchAccidentsSummery()
    }, []);

    // const accidentData = [
    //     { location: 'Area 1', date: '2024-01-01', count: 2 },
    //     { location: 'Area 2', date: '2024-01-25', count: 1 },
    //     { location: 'Area 1', date: '2024-01-10', count: 0 },
    //     { location: 'Area 2', date: '2024-01-17', count: 3 },
    //     { location: 'Area 3', date: '2024-01-12', count: 1 },
    //     { location: 'Area 4', date: '2024-01-02', count: 0 },
    //     { location: 'Area 5', date: '2024-01-18', count: 1 },
    //     // Add more data
    // ];

    function handleAccidentByCause(cause) {
        navigate('/reports', { state: { cause } });
    }
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
                                    {accidentData2.length}
                                </div>
                            </Link>
                            <Link to={"/reports?sort=Open"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Open
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    {accidentData2.filter(report => report.status == 'Open').length}
                                </div>
                            </Link>
                            <Link to={"/reports?sort=Resolved"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Resolved
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    {accidentData2.filter(report => report.status == 'Resolved').length}
                                </div>
                            </Link>
                            <Link to={"/reports?sort=Recent"} className="dashboard_boxes_box">
                                <div className="dashboard_boxes_box_title">
                                    Recent
                                </div>
                                <div className="dashboard_boxes_box_number">
                                    {recentReportCount}
                                </div>
                            </Link>
                        </div>
                        <div className="dashboard_row">
                            <div className="dashboard_causes">
                                <div className="dashboard_causes_title">
                                    Accident Causes
                                </div>
                                <div onClick={() => handleAccidentByCause('Car')} className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_car.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                    {accidentData2.filter(report => report.vehicle == 'Car').length}
                                    </div>
                                </div>
                                <div onClick={() => handleAccidentByCause('Truck')} className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_truck.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                    {accidentData2.filter(report => report.vehicle == 'Truck').length}
                                    </div>
                                </div>
                                <div onClick={() => handleAccidentByCause('Bus')} className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_bus.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                    {accidentData2.filter(report => report.vehicle == 'Bus').length}
                                    </div>
                                </div>
                                <div onClick={() => handleAccidentByCause('Bike')} className="dashboard_causes_cause">
                                    <div className="last_accident_details_other_emr">
                                        <img src="/src/assets/icon_bike.svg" alt="" />
                                    </div>
                                    <div className="dashboard_causes_cause_number">
                                    {accidentData2.filter(report => report.vehicle == 'Bike').length}
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
