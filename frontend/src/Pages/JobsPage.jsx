// import React from 'react'
// import TopNav from '../Components/TopNav'
// import SideBar from '../Components/SideBar'
// import './../Css/AdminDashboard.css';
// import './../Css/Dashboard.css';

// export default function JobsPage() {
//     return (
//         <div className='dash'>
//             <div className="dash_rows">
//                 <SideBar />
//                 <div>
//                     <TopNav title={"Assigned Jobs"} />
//                     <div className='usermanagement'>
//                         <div className="dashboard_users">
//                             <div style={{borderBottom:"1px solid #313245", width:"95%"}} className="dashboard_users_users">
//                                 <div className="dashboard_users_users_title">
//                                     Police Level
//                                 </div>
//                                 <div className="dashboard_users_users_users">
//                                     <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
//                                         Jobs Not Found
//                                     </div>
//                                 </div>
//                             </div>
//                             <div style={{borderBottom:"1px solid #313245", width:"95%"}} className="dashboard_users_users">
//                                 <div className="dashboard_users_users_title">
//                                     Fire Level
//                                 </div>
//                                 <div className="dashboard_users_users_users">
//                                     <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
//                                         Jobs Not Found
//                                     </div>
//                                 </div>
//                             </div>
//                             <div style={{borderBottom:"1px solid #313245", width:"95%"}} className="dashboard_users_users">
//                                 <div className="dashboard_users_users_title">
//                                     Ambulance Level
//                                 </div>
//                                 <div className="dashboard_users_users_users">
//                                     <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
//                                         Jobs Not Found
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import TopNav from '../Components/TopNav';
import SideBar from '../Components/SideBar';
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import url from '../../backend.json';

export default function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [accidents, setAccidents] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch jobs, accidents, and users data from API
        const fetchData = async () => {
            try {
                const jobsResponse = await fetch(url.URL + '/api/jobs');
                const accidentsResponse = await fetch(url.URL + '/api/accidents');
                const usersResponse = await fetch(url.URL + '/api/users/all');

                if (!jobsResponse.ok || !accidentsResponse.ok || !usersResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const jobsData = await jobsResponse.json();
                const accidentsData = await accidentsResponse.json();
                const usersData = await usersResponse.json();

                setJobs(jobsData);
                setAccidents(accidentsData);
                setUsers(usersData);
                // console.log(jobs)
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    const getAccidentDetails = (accidentId) => {
        console.log("hello::", accidentId.spot);

        return accidents.find(accident => accident._id === accidentId) || {};
    };

    const getUserDetails = (userId) => {
        return users.find(user => user._id === userId) || {};
    };

    const renderJobs = (level) => {
        const filteredJobs = jobs.filter(job => job.type === level);
        console.log("Jobs:::",jobs);
        

        if (filteredJobs.length === 0) {
            return <div className="dashboard_users_users_users_user dashboard_users_users_users_title">Jobs Not Found</div>;
        }

        return filteredJobs.map((job) => {
            const accident = getAccidentDetails(job.accidentId);
            const user = getUserDetails(job.assignedUserId);

            return (
                <div key={job._id.$oid} className='emergencyJobs'>
                    {/* <div className="mid_accidents_views_accidents_accident_column job_details">
                        <div><strong>Accident ID:</strong> {job.accidentId._id}</div>
                        <div><strong>Location:</strong> {job.accidentId.spot}</div>
                        <div><strong>Assigned to:</strong> {job.assignedUserId.firstName || 'Unknown'}</div>
                        <div><strong>Description:</strong> {job.description}</div>
                        <div><strong>Status:</strong> {job.status}</div>
                    </div> */}
                    <div class="last_accident_details" style={{width:"50%"}}>
                        <div class="last_accident_details_location">
                            <img src="./src/assets/icon_location.svg" alt="" />
                            <div class="last_accident_details_location_details">
                                <div class="last_accident_details_location_title">Location</div>
                                <div class="last_accident_details_location_Desc">{job.accidentId.spot}</div>
                            </div>
                        </div>
                        <div class="last_accident_details_timesev">
                            <div class="last_accident_details_location">
                                <img src="./src/assets/icon_time.svg" alt="" />
                                <div class="last_accident_details_location_details">
                                    <div class="last_accident_details_location_title">
                                        Date
                                    </div>
                                    <div class="last_accident_details_location_Desc">
                                        {job.accidentId.time}
                                    </div>
                                </div>
                            </div>
                            <div class="last_accident_details_location">
                                <img src="./src/assets/icon_severity.svg" alt="" />
                                <div class="last_accident_details_location_details">
                                    <div class="last_accident_details_location_title">
                                        Severity
                                    </div>
                                    <div class="last_accident_details_location_Desc">
                                        <select name="severity" id="severity" value={job.accidentId.severity}>
                                            <option value="High">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="last_accident_details_timesev">
                            <div class="last_accident_details_location">
                                <img src="./src/assets/icon_users.svg" alt="" />
                                <div class="last_accident_details_location_details">
                                    <div class="last_accident_details_location_title">
                                        Assigned to
                                    </div>
                                    <div class="last_accident_details_location_Desc">
                                        {job.assignedUserId.firstName || 'Unknown'}
                                    </div>
                                </div>
                            </div>
                            <div class="last_accident_details_location">
                                <img src="./src/assets/icon_report.svg" alt="" />
                                <div class="last_accident_details_location_details">
                                    <div class="last_accident_details_location_title">
                                        Status
                                    </div>
                                    <div class="last_accident_details_location_Desc">
                                        <select name="severity" id="severity" value={job.status}>
                                            <option value="Open">Open</option>
                                            <option value="Resolved">Resolved</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="job_actions">
                        {/* <div className='emergencyJobs_buttons' onClick={() => toggleJobStatus(job._id, job.status, job.accidentId._id)}>
                            {job.status === 'Open' ? 'Mark as Resolved' : 'Mark as Open'}
                        </div> */}
                        {job.accidentId.location && (
                            <>
                                <div className='emergencyJobs_buttons'
                                    onClick={() => navigator.clipboard.writeText(`https://www.google.com/maps?q=${job.accidentId.location.lat},${job.accidentId.location.lng}`)}
                                >
                                    Copy Location Link
                                </div>
                                <div className='emergencyJobs_buttons'
                                    onClick={() => window.open(`https://www.google.com/maps?q=${job.accidentId.location.lat},${job.accidentId.location.lng}`, '_blank')}
                                >
                                    Open in Google Maps
                                </div>
                            </>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Assigned Jobs"} />
                    <div className='usermanagement'>
                        <div className="dashboard_users">
                            <div style={{  width: "95%" }} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">Police Level</div>
                                <div className="dashboard_users_users_users">
                                    {renderJobs('police')}
                                </div>
                            </div>
                            <div style={{  width: "95%" }} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">Fire Level</div>
                                <div className="dashboard_users_users_users">
                                    {renderJobs('fire')}
                                </div>
                            </div>
                            <div style={{  width: "95%" }} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">Ambulance Level</div>
                                <div className="dashboard_users_users_users">
                                    {renderJobs('ambulance')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
