import React from 'react'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './../Css/HomePage.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero';

export default function HomePage() {
    return (
        <div style={{ position: "relative" }}>
            {/* Navbar */}
            <NavBar />

            {/* Fullscreen Hero Section */}
            {/* <header style={{ marginTop: 0 }} className="d-flex justify-content-center align-items-center text-white hero-section">
                <div style={{ backdropFilter: "blur(5px)", width: "100%" }} className="text-center">
                    <h1 style={{ letterSpacing: "5px", textShadow: "1px 1px 45px black" }} className="display-3 font-weight-bold mb-4 hero-title">Smart Accident Detection <br /> And <br /> Reporting System</h1>
                    <p style={{ fontWeight: 100, fontSize: '24px', textShadow: "4px 4px 10px black", marginTop: 40 }} className="lead mb-5 hero-subtitle">Real-time accident monitoring using IoT, ML, Web Tech, and Cloud.</p>
                    <Link to="/public" style={{ color: 'white', fontWeight: 800, marginTop: 20, padding: "10px 40px", borderRadius: 7, letterSpacing: "2px" }} className="btn btn-custom btn-lg shadow">Get Started</Link>
                </div>
            </header> */}
            <Hero/>


            {/* Features Section */}
            <section className="py-5 features-section">
                <div className="container">
                    <h2 className="font-weight-bold text-center mb-4 section-title">Key Features</h2>
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <div className="feature-box">
                                <i className="fas fa-car-crash fa-3x text-primary mb-3"></i>
                                <h5 className="font-weight-bold">Real-time Detection</h5>
                                <p>Automatically detects accidents using IoT and machine learning.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-box">
                                <i className="fas fa-map-marker-alt fa-3x text-danger mb-3"></i>
                                <h5 className="font-weight-bold">Location Tracking</h5>
                                <p>Pinpoints accident locations with GPS coordinates for rapid response.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="feature-box">
                                <i className="fas fa-ambulance fa-3x text-success mb-3"></i>
                                <h5 className="font-weight-bold">Instant Alerts</h5>
                                <p>Notifies emergency services instantly for quicker action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-5 how-it-works-section text-white">
                <div className="container text-center">
                    <h2 className="font-weight-bold mb-5 section-title">How It Works</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="how-it-works-box">
                                <i className="fas fa-eye fa-3x mb-3"></i>
                                <h5 className="font-weight-bold">Accident Detection</h5>
                                <p>Uses street cameras to detect and identify accidents instantly.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="how-it-works-box">
                                <i className="fas fa-map fa-3x mb-3"></i>
                                <h5 className="font-weight-bold">Location Identification</h5>
                                <p>Tracks the location and sends coordinates to relevant authorities.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="how-it-works-box">
                                <i className="fas fa-bell fa-3x mb-3"></i>
                                <h5 className="font-weight-bold">Emergency Response</h5>
                                <p>Alerts services such as police, ambulance, and fire brigade.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
