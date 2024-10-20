import React from 'react'
import './../Css/LoginPage.css';
import './../Css/Navbar.css';
import './../Css/RegisterPage.css';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

export default function
    () {
    return (
        <div className='loginpage'>
            <NavBar />
            <div className="loginpage_login">
                <div className="loginpage_login_head">
                    Register
                </div>
                <div className="loginpage_login_form">
                    <div className="loginpage_login_form_name">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className="loginpage_login_form_email">
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="loginpage_login_form_email">
                        <input type="tel" placeholder='Mobile No' />
                    </div>
                    <div className="loginpage_login_form_password">
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="loginpage_login_form_password">
                        <input type="password" placeholder='Conferm Password' />
                    </div>
                    <div className="loginpage_login_form_submit">
                    <Link to="/dashboard"><input type="submit" value="Submit" /></Link>
                    </div>
                    <div className="loginpage_login_form_reset">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
