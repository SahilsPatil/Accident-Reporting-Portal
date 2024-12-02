import React, { useState, useEffect } from 'react';
import TopNav from '../Components/TopNav';
import SideBar from '../Components/SideBar';
import './../Css/AdminDashboard.css';
import './../Css/Dashboard.css';
import './../Css/LoginPage.css';
import './../Css/Navbar.css';
import './../Css/RegisterPage.css';
import axios from 'axios';

export default function ReportAccidentPage() {
    const [formData, setFormData] = useState({
        spot: '',
        severity: '',
        type: '',
        description: '',
        images: null,
        location: { lat: null, lng: null },
        time: new Date(),
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to get the current location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setFormData(prevData => ({
                        ...prevData,
                        location: { lat: latitude, lng: longitude }
                    }));
                },
                (err) => {
                    console.error("Error getting location: ", err);
                    setError("Unable to retrieve your location. Please check location settings.");
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        // Optionally, get the location when the component is mounted
        getLocation();
    }, []); // This will run once when the component is mounted


    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             setFormData((prevData) => ({
    //                 ...prevData,
    //                 location: {
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude
    //                 }
    //             }));
    //         },
    //         () => {
    //             console.warn("Could not fetch location. Using last known or default location.");
    //         }
    //     );
    // }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "images") {
            // Handle file input
            const updatedImages = Array.from(files).map((file) => {
                // Generate a unique file name using the timestamp
                const uniqueFileName = `${Date.now()}-${file.name}`;
                // Save the file temporarily to the 'assets' folder
                const reader = new FileReader();
                reader.onloadend = () => {
                    const tempImagePath = `${uniqueFileName}`;
                    // This would be the temporary image location, which can later be uploaded
                    console.log(tempImagePath); // You can use this for preview or other logic
                };
                reader.readAsDataURL(file);
                return uniqueFileName; // Save the unique name
            });
            setFormData((prevData) => ({
                ...prevData,
                images: updatedImages
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting the form data:", formData);
    
        // Create the data object
        const data = {
            spot: formData.spot,
            severity: formData.severity,
            type: formData.type,
            location: formData.location,
            image: formData.images, // If images are part of the form, consider handling it as base64 or uploading separately
            time: formData.time,
            description: formData.description
        };
    
        // Send the POST request with JSON data
        axios.post('http://localhost:5000/api/accidents/report', data, {
            headers: {
                'Content-Type': 'application/json' // Send data as JSON
            }
        })
        .then(response => {
            console.log('Accident reported:', response);
            alert("Accident reported successfully!");
            // Reset the form data after successful submission
            setFormData({
                spot: '',
                severity: '',
                type: '',
                description: '',
                images: null,
                location: { lat: null, lng: null },
                time: new Date(),
            });
        })
        .catch(error => {
            console.error('Error reporting accident:', error);
            setError('Failed to report accident. Please try again.');
        });
    };
    

    return (
        <div className='dash'>
            <div className="dash_rows">
                <SideBar />
                <div>
                    <TopNav title={"Report an Accident"} />
                    <div className='dashboard'>
                        <div style={{ marginTop: "0px", paddingTop: "0px" }} className="loginpage_login">
                            <div className="loginpage_login_head">Report an Accident</div>
                            <form className="loginpage_login_form" onSubmit={handleSubmit}>
                                <div className="loginpage_login_form_role">
                                    <input
                                        type="text"
                                        name="spot"
                                        placeholder="Accident Spot"
                                        value={formData.spot}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="loginpage_login_form_role">
                                    <select name="severity" value={formData.severity} onChange={handleChange}>
                                        <option value="">Select Severity</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>

                                <div className="loginpage_login_form_role">
                                    <select name="type" value={formData.type} onChange={handleChange}>
                                        <option value="">Select Vehicle Type</option>
                                        <option value="Car">Car</option>
                                        <option value="Truck">Truck</option>
                                        <option value="Bus">Bus</option>
                                        <option value="Bike">Bike</option>
                                    </select>
                                </div>

                                <div className="loginpage_login_form_role">
                                    <input type="file" name="images" onChange={handleChange} multiple />
                                </div>

                                <div className="loginpage_login_form_role">
                                    <textarea className='loginpage_login_form_role_textarea'
                                        name="description"
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="loginpage_login_form_submit">
                                    <input type="submit" disabled={loading} value={loading ? 'Submitting...' : 'Submit Report'} />
                                </div>

                                {error && <div className="error">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
