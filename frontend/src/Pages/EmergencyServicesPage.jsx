import React, { useEffect, useState } from 'react';
import TopNav from '../Components/TopNav';
import SideBar from '../Components/SideBar';
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import { useAuth } from '../context/AuthContext';

export default function EmergencyServicesPage() {
    const [jobs, setJobs] = useState([]);
    const [accidents, setAccidents] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userAllData } = useAuth();
    const [userId, setUserId] = useState('');  // Current user's ID (assumed to be passed in or fetched from auth)

    console.log(userAllData);
    
    useEffect(() => {
        // Fetch jobs, accidents, and users data from API
        const fetchData = async () => {
            try {
                const jobsResponse = await fetch(`http://localhost:5000/api/jobs`);
                const accidentsResponse = await fetch('http://localhost:5000/api/accidents');
                const usersResponse = await fetch('http://localhost:5000/api/users/all');

                if (!jobsResponse.ok || !accidentsResponse.ok || !usersResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const jobsData = await jobsResponse.json();
                const accidentsData = await accidentsResponse.json();
                const usersData = await usersResponse.json();

                setJobs(jobsData);
                setAccidents(accidentsData);
                setUsers(usersData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const getAccidentDetails = (accidentId) => {
        return accidents.find(accident => accident._id === accidentId) || {};
    };

    const getUserDetails = (userId) => {
        return users.find(user => user._id === userId) || {};
    };

    const toggleJobStatus = async (jobId, currentStatus, accId) => {
        // Toggle status between open and resolved
        const updatedStatus = currentStatus === 'Open' ? 'Resolved' : 'Open';
        const updatedJob = { status: updatedStatus };

        try {
            const response = await fetch(`http://localhost:5000/api/jobs/update/${jobId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedJob),
            });
            const response2 = await fetch(`http://localhost:5000/api/accidents/${accId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedJob),
            });

            if (!response.ok) {
                throw new Error('Failed to update job status');
            }

            const updatedJobs = jobs.map(job =>
                job._id === jobId ? { ...job, status: updatedStatus } : job
            );
            setJobs(updatedJobs);
        } catch (error) {
            setError(error.message);
        }
    };

    const renderJobs = (status) => {
        const filteredJobs = jobs.filter(job => job.status === status && job.assignedUserId._id === userAllData.id);

        if (filteredJobs.length === 0) {
            return <div className="dashboard_users_users_users_user dashboard_users_users_users_title">No Jobs Found</div>;
        }

        return filteredJobs.map((job) => {
            const accident = getAccidentDetails(job.accidentId.$oid);
            const user = getUserDetails(job.assignedUserId.$oid);

            return (
                <div key={job._id.$oid} className="dashboard_users_users_users_user">
                    <div className="job_details">
                        <div><strong>Accident ID:</strong> {job.accidentId._id}</div>
                        <div><strong>Location:</strong> {job.accidentId.spot}</div>
                        <div><strong>Assigned to:</strong> {job.assignedUserId.firstName || 'Unknown'}</div>
                        <div><strong>Description:</strong> {job.description}</div>
                        <div><strong>Status:</strong> {job.status}</div>
                    </div>
                    <div className="job_actions">
                        <button onClick={() => toggleJobStatus(job._id, job.status, job.accidentId._id)}>
                            {job.status === 'Open' ? 'Mark as Resolved' : 'Mark as Open'}
                        </button>
                        {job.accidentId.location && (
                            <>
                                <button
                                    onClick={() => navigator.clipboard.writeText(`https://www.google.com/maps?q=${job.accidentId.location.lat},${job.accidentId.location.lng}`)}
                                >
                                    Copy Location Link
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.google.com/maps?q=${job.accidentId.location.lat},${job.accidentId.location.lng}`, '_blank')}
                                >
                                    Open in Google Maps
                                </button>
                            </>
                        )}
                    </div>
                </div>
            );
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Assigned Jobs"} />
                    <div className='usermanagement'>
                        <div className="dashboard_users">
                            <div style={{ borderBottom: "1px solid #313245", width: "95%" }} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">Open Jobs</div>
                                <div className="dashboard_users_users_users">
                                    {renderJobs('Open')}
                                </div>
                            </div>
                            <div style={{ borderBottom: "1px solid #313245", width: "95%" }} className="dashboard_users_users">
                                <div className="dashboard_users_users_title">Resolved Jobs</div>
                                <div className="dashboard_users_users_users">
                                    {renderJobs('Resolved')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
