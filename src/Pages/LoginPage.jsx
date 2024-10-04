import React, { useState } from 'react';
import './../Css/LoginPage.css';
import './../Css/Navbar.css';
import NavBar from '../Components/NavBar';

const LoginPage = () => {

    return (
        <div className='loginpage'>
            <NavBar />
            <div className="loginpage_login">
                <div className="loginpage_login_head">
                    Login
                </div>
                <div className="loginpage_login_form">
                    <div className="loginpage_login_form_role">
                        {/* <label htmlFor="role">Select Role</label> */}
                        <select name="role" id="role">
                            <option value="Role" disabled>Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Police">Police</option>
                        </select>
                    </div>
                    <div className="loginpage_login_form_email">
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="loginpage_login_form_password">
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="loginpage_login_form_reset">
                        Reset Password
                    </div>
                    <div className="loginpage_login_form_submit">
                        <input type="submit" value="Submit" />
                        <div>Register</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
