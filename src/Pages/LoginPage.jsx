import React, { useState } from 'react';
import './../Css/LoginPage.css';
import './../Css/Navbar.css';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [role, setRole] = useState("public")

    const history = useNavigate();
    const handleSubmit = () => {
        history("/dashboard")
    }

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
                        <select onChange={(e) => setRole(e.target.value)} value={role} name="role" id="role">
                            <option value="Role" disabled>Select Role</option>
                            <option value="Public">Public</option>
                            <option value="Fire">Fire</option>
                            <option value="Ambulance">Ambulance</option>
                            <option value="Police">Police</option>
                            <option value="Admin">Admin</option>
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
                        <input onClick={handleSubmit} type="submit" value="Submit" />
                        <div><Link to="/register">Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
