import React from 'react'

export default function UserDataTitles() {
    return (
        <div className="dashboard_users_users_users_user dashboard_users_users_users_title">
            <div className="dashboard_users_users_users_user_id">
                <input type="text" name="email" id="email" defaultValue="ID" readOnly />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="email" name="email" id="email" defaultValue="Email" readOnly />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="password" id="password" placeholder='Password' readOnly defaultValue={"Password"} />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="password" id="password" defaultValue={"Name"} readOnly />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="password" id="password" defaultValue={"Location"} readOnly />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="password" id="password" defaultValue={"Role"} readOnly />
            </div>
            <div className="dashboard_users_users_users_user_update">
                Button
            </div>
            <div className="dashboard_users_users_users_user_update">
                Button
            </div>
        </div>
    )
}
