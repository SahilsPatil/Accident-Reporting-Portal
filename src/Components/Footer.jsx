import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container text-center">
                <div className="footer-social">
                    <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/"><i className="fab fa-twitter"></i></Link>
                    <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                </div>
                <p>© 2024 Smart Accident Detection System. All rights reserved.</p>
            </div>
        </footer>
    )
}
