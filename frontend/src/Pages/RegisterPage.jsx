import React, { useState } from 'react'
import './../Css/LoginPage.css';
import './../Css/Navbar.css';
import './../Css/RegisterPage.css';
import NavBar from '../Components/NavBar';
import Popup from '../Components/Popup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [popup, setPopup] = useState({ show: false, message: '', type: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPopup({ show: true, message: "Passwords do not match", type: "error" });
            return;
        }
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            setPopup({ show: true, message: "Registration successful!", type: "success" });
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            setPopup({ show: true, message: "Registration failed. Try again.", type: "error" });
        }
    };
    return (
        <div className='loginpage'>
            <NavBar />
            {popup.show && <Popup message={popup.message} type={popup.type} onClose={() => setPopup({ show: false })} />}

            <div className="loginpage_login">
                <div className="loginpage_login_head">
                    Register
                </div>
                <div className="loginpage_login_form">
                    <div className="loginpage_login_form_name">
                        <input type="text" name="firstName" placeholder='First Name' onChange={handleChange} />
                        <input type="text" name="lastName" placeholder='Last Name' onChange={handleChange} />
                    </div>
                    <div className="loginpage_login_form_email">
                        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                    </div>
                    <div className="loginpage_login_form_email">
                        <input type="tel" name="mobile" placeholder='Mobile No' onChange={handleChange} />
                    </div>
                    <div className="loginpage_login_form_password">
                        <input type="password" name="password" placeholder='Password' onChange={handleChange} />
                    </div>
                    <div className="loginpage_login_form_password">
                        <input type="password" name="confirmPassword" placeholder='Confirm Password' onChange={handleChange} />
                    </div>
                    <div className="loginpage_login_form_submit">
                        <input type="submit" value="Submit" onClick={handleSubmit} />
                    </div>
                    <div className="loginpage_login_form_reset">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
