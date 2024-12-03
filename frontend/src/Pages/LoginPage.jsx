import React, { useState } from 'react';
import './../Css/LoginPage.css';
// import './../Css/Navbar.css';
import NavBar from '../Components/NavBar';
import Popup from '../Components/Popup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
// import * as jwt_decode from 'jwt-decode';
import url from '../../backend.json';

const LoginPage = () => {
    const [role, setRole] = useState("public")
    const [formData, setFormData] = useState({ email: '', password: '', role: 'Public' });
    const [popup, setPopup] = useState({ show: false, message: '', type: '' });
    const navigate = useNavigate();
    const { login } = useAuth();


    const decodeJWT = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join(''));

        return JSON.parse(jsonPayload);
    };

    // const history = useNavigate();
    // const handleSubmit = () => {
    //     history("/dashboard")
    // }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url.URL+'/api/auth/login', formData);
            console.log(response);
            // const data = await response.json();

            if (response.status == 200) {
                const token = response.data.token;
                const userData = {role : decodeJWT(token).role};
                const userAllData = response.data.result                
                login(userData, token, userAllData); // Set token and user data
                setPopup({ show: true, message: "Login successful!", type: "success" });
                setTimeout(() => navigate('/dashboard'), 1000);
            } else {
                setPopup({ show: true, message: "Login Failed! Invalid email or password", type: "error" });
            }
        } catch (error) {
            console.log(error);

            setPopup({ show: true, message: "Invalid email or password", type: "error" });
        }
    };

    return (
        <div className='loginpage'>
            <NavBar />
            {popup.show && <Popup message={popup.message} type={popup.type} onClose={() => setPopup({ show: false })} />}
            <div className="loginpage_login">
                <div className="loginpage_login_head">
                    Login
                </div>
                <div className="loginpage_login_form">
                    <div className="loginpage_login_form_role">
                        {/* <label htmlFor="role">Select Role</label> */}
                        <select onChange={handleChange} value={formData.role} name="role" id="role">
                            <option value="Role" disabled>Select Role</option>
                            <option value="Public">Public</option>
                            <option value="Fire">Fire</option>
                            <option value="Ambulance">Ambulance</option>
                            <option value="Police">Police</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="loginpage_login_form_email">
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="loginpage_login_form_password">
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
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






// import React, { useState } from 'react';
// import './../Css/LoginPage.css';
// import NavBar from '../Components/NavBar';
// import Popup from '../Components/Popup';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = () => {
//     const [formData, setFormData] = useState({ email: '', password: '', role: 'Public' });
//     const [popup, setPopup] = useState({ show: false, message: '', type: '' });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(url.URL+'/api/auth/login', formData);
//             setPopup({ show: true, message: "Login successful!", type: "success" });
//             setTimeout(() => navigate('/dashboard'), 3000);
//         } catch (error) {
//             setPopup({ show: true, message: "Invalid email or password", type: "error" });
//         }
//     };

//     return (
//         <div className='loginpage'>
//             <NavBar />
//             {popup.show && <Popup message={popup.message} type={popup.type} onClose={() => setPopup({ show: false })} />}
//             <div className="loginpage_login">
//                 <div className="loginpage_login_head">Login</div>
//                 <div className="loginpage_login_form">
//                     <select name="role" onChange={handleChange} value={formData.role}>
//                         <option value="Public">Public</option>
//                         <option value="Fire">Fire</option>
//                         <option value="Ambulance">Ambulance</option>
//                         <option value="Police">Police</option>
//                         <option value="Admin">Admin</option>
//                     </select>
//                     <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//                     <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//                     <input type="submit" value="Login" onClick={handleSubmit} />
//                     <Link to="/register">Don't have an account? Register</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;
