import React, { useState } from 'react'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import './../Css/UserManagament.css';

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
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="ID" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="Email" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" placeholder='Password' defaultValue={"Password"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Location"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Role"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Button
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Button
                                        </div>
                                    </div>
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
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
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
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="ID" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="Email" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" placeholder='Password' defaultValue={"Password"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"First Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Last Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Role"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Button
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Button
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Public Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="ID" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="Email" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" placeholder='Password' defaultValue={"Password"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"First Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Last Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Role"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Button
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Button
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
                                    </div>
                                    <div className="dashboard_users_users_users_user">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" defaultValue="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" defaultValue="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" defaultValue={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_update">
                                            Update
                                        </div>
                                        <div className="dashboard_users_users_users_user_delete">
                                            Delete
                                        </div>
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
