import React, { useState } from 'react'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import './../Css/UserManagament.css';
import UserDataTitles from '../Components/UserDataTitles';
import UserData from '../Components/UserData';

export default function UserManagament() {

    const MyComponent = () => {
        return (
            <div className="dashboard_users_users_users_user">
                <div className="dashboard_users_users_users_user_id">
                    <input type="text" name="email" id="email" defaultValue="1234" readOnly placeholder='ID' />
                </div>
                <div className="dashboard_users_users_users_user_input">
                    <input type="email" name="email" id="email" defaultValue="admin@ars.com" placeholder='Email' />
                </div>
                <div className="dashboard_users_users_users_user_input">
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <div className="dashboard_users_users_users_user_input">
                    <input type="text" name="password" id="password" defaultValue="Admin" placeholder='Name' />
                </div>
                <div className="dashboard_users_users_users_user_input">
                    <input type="text" name="password" id="password" defaultdefaultValue="Admin" placeholder='Latitude, Longitude' />
                </div>
                <div className="dashboard_users_users_users_user_input">
                    <input type="text" name="password" id="password" defaultValue="Admin" placeholder='Role' />
                </div>
                <div className="dashboard_users_users_users_user_update">
                    Update
                </div>
                <div className="dashboard_users_users_users_user_delete">
                    Delete
                </div>
            </div>
        );
    };

    const userData = [
        {
            "ID": 1,
            "Email": "admin1@example.com",
            "Name": "Admin Alice",
            "Password": "adminPass123",
            "Location": "28.7041,77.1025",
            "Role": "admin"
        },
        {
            "ID": 2,
            "Email": "police1@example.com",
            "Name": "Officer James",
            "Password": "policePass456",
            "Location": "19.0760,72.8777",
            "Role": "police"
        },
        {
            "ID": 3,
            "Email": "ambulance1@example.com",
            "Name": "Driver Ravi",
            "Password": "ambulancePass789",
            "Location": "22.5726,88.3639",
            "Role": "ambulance"
        },
        {
            "ID": 4,
            "Email": "fire1@example.com",
            "Name": "Firefighter Raj",
            "Password": "firePass101",
            "Location": "13.0827,80.2707",
            "Role": "fire"
        },
        {
            "ID": 5,
            "Email": "public1@example.com",
            "Name": "User Anita",
            "Password": "publicPass202",
            "Location": "17.3850,78.4867",
            "Role": "public"
        },
        {
            "ID": 6,
            "Email": "admin2@example.com",
            "Name": "Admin Bob",
            "Password": "adminPass303",
            "Location": "12.9716,77.5946",
            "Role": "admin"
        },
        {
            "ID": 7,
            "Email": "police2@example.com",
            "Name": "Officer Priya",
            "Password": "policePass404",
            "Location": "18.5204,73.8567",
            "Role": "police"
        },
        {
            "ID": 8,
            "Email": "ambulance2@example.com",
            "Name": "Driver Suresh",
            "Password": "ambulancePass505",
            "Location": "21.1702,72.8311",
            "Role": "ambulance"
        },
        {
            "ID": 9,
            "Email": "fire2@example.com",
            "Name": "Firefighter Kiran",
            "Password": "firePass606",
            "Location": "23.0225,72.5714",
            "Role": "fire"
        },
        {
            "ID": 10,
            "Email": "public2@example.com",
            "Name": "User Manish",
            "Password": "publicPass707",
            "Location": "19.2183,73.0797",
            "Role": "public"
        },
        {
            "ID": 11,
            "Email": "admin3@example.com",
            "Name": "Admin Carol",
            "Password": "adminPass808",
            "Location": "15.2993,74.1240",
            "Role": "admin"
        },
        {
            "ID": 12,
            "Email": "police3@example.com",
            "Name": "Officer Sunil",
            "Password": "policePass909",
            "Location": "26.9124,75.7873",
            "Role": "police"
        },
        {
            "ID": 13,
            "Email": "ambulance3@example.com",
            "Name": "Driver Preeti",
            "Password": "ambulancePass111",
            "Location": "28.4595,77.0266",
            "Role": "ambulance"
        },
        {
            "ID": 14,
            "Email": "fire3@example.com",
            "Name": "Firefighter Amit",
            "Password": "firePass222",
            "Location": "25.3176,82.9739",
            "Role": "fire"
        },
        {
            "ID": 15,
            "Email": "public3@example.com",
            "Name": "User Meena",
            "Password": "publicPass333",
            "Location": "13.0827,80.2707",
            "Role": "public"
        },
        {
            "ID": 16,
            "Email": "admin4@example.com",
            "Name": "Admin David",
            "Password": "adminPass444",
            "Location": "22.7196,75.8577",
            "Role": "admin"
        },
        {
            "ID": 17,
            "Email": "police4@example.com",
            "Name": "Officer Naina",
            "Password": "policePass555",
            "Location": "23.2599,77.4126",
            "Role": "police"
        },
        {
            "ID": 18,
            "Email": "ambulance4@example.com",
            "Name": "Driver Ramesh",
            "Password": "ambulancePass666",
            "Location": "28.6139,77.2090",
            "Role": "ambulance"
        },
        {
            "ID": 19,
            "Email": "fire4@example.com",
            "Name": "Firefighter Ravi",
            "Password": "firePass777",
            "Location": "26.8467,80.9462",
            "Role": "fire"
        },
        {
            "ID": 20,
            "Email": "public4@example.com",
            "Name": "User Seema",
            "Password": "publicPass888",
            "Location": "11.0168,76.9558",
            "Role": "public"
        }
    ]


    const [components, setComponents] = useState([]);

    const handleAddComponent = () => {
        setComponents([...components, <MyComponent key={components.length} />]);
    };

    const handleDeleteComponent = (id) => {
        setComponents(components.filter(component => component.id !== id));
    };
    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Users Management"} />
                    <div className='usermanagement'>
                        <div className="dashboard_users">
                            <div className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Admin Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <UserDataTitles />
                                    {
                                        userData.map((e) => {
                                            if (e.Role == 'admin') {
                                                return (<UserData id={e.ID} name={e.Name} email={e.Email} location={e.Location} role={e.Role} />)
                                            }
                                        })
                                    }
                                    {components}
                                </div>
                                <div className="dashboard_users_users_add" onClick={handleAddComponent}>
                                    +
                                </div>
                            </div>
                            <div className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Emergency Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <UserDataTitles />
                                    {
                                        userData.map((e) => {
                                            if (e.Role == 'police' || e.Role == 'ambulance' || e.Role == 'fire') {
                                                return (<UserData id={e.ID} name={e.Name} email={e.Email} location={e.Location} role={e.Role} />)

                                            }
                                        })
                                    }
                                    {components}
                                </div>
                                <div className="dashboard_users_users_add" onClick={handleAddComponent}>
                                    +
                                </div>
                            </div>
                            <div className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Public Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users">
                                        <UserDataTitles />
                                        {
                                            userData.map((e) => {
                                                if (e.Role == 'public') {
                                                    return (<UserData id={e.ID} name={e.Name} email={e.Email} location={e.Location} role={e.Role} />)

                                                }
                                            })
                                        }
                                        {components}
                                    </div>
                                    <div className="dashboard_users_users_add" onClick={handleAddComponent}>
                                        +
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
