import React from 'react'
import TopNav from '../Components/TopNav'
import SideBar from '../Components/SideBar'
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import './../Css/UserManagament.css';

export default function UserManagament() {
    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Users Management"} />
                    <div className='dashboard'>
                        <div className="dashboard_users">
                            <div className="dashboard_users_users">
                                <div className="dashboard_users_users_title">
                                    Admin Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" value="ID" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="Email" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" placeholder='Password' value={"Password"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"First Name"}  />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Last Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Role"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                    Emergency Level
                                </div>
                                <div className="dashboard_users_users_users">
                                    <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
                                        <div className="dashboard_users_users_users_user_id">
                                            <input type="text" name="email" id="email" value="ID" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="Email" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" placeholder='Password' value={"Password"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"First Name"}  />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Last Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Role"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="ID" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="Email" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" placeholder='Password' value={"Password"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"First Name"}  />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Last Name"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Role"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
                                            <input type="text" name="email" id="email" value="1234" readOnly />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="email" name="email" id="email" value="admin@ars.com" />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="password" name="password" id="password" placeholder='Password' />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
                                        </div>
                                        <div className="dashboard_users_users_users_user_input">
                                            <input type="text" name="password" id="password" value={"Admin"} />
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
