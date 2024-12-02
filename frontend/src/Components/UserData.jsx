import React from 'react'

export default function UserData({id,email,password,name,location,role}) {
    return (
        <div className="dashboard_users_users_users_user">
            <div className="dashboard_users_users_users_user_id">
                <input type="text" name="email" id="email" value={id} readOnly placeholder='ID' />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="email" name="email" id="email" defaultValue={email} placeholder='Email' />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="password" name="password" id="password" placeholder='Password' />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="name" id="name" defaultValue={name} placeholder='Name' />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="location" id="location" defaultValue={location} placeholder='Latitude, Longitude' />
            </div>
            <div className="dashboard_users_users_users_user_input">
                <input type="text" name="role" id="role" defaultValue={role} placeholder='Role' />
            </div>
            <div className="dashboard_users_users_users_user_update">
                Update
            </div>
            <div className="dashboard_users_users_users_user_delete">
                Delete
            </div>
        </div>
    )
}
