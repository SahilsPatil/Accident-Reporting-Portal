import React from 'react'
import './../Css/Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className='hero'>
            <div className="hero_side">
                <div className="hero_side_menu">
                    <Link to="/help"><li>Help</li></Link>
                    <Link to="/how"><li>How it Works</li></Link>

                </div>
                <div className="hero_side_social">
                    <a href="https://linkdin.com"><img src="/src/assets/icon_linkdin.svg" color='#FCFCFC' alt="" /></a>
                    <a href="https://instagram.com"><img src="/src/assets/icon_messanger.svg" alt="" /></a>
                    <a href="https://x.com"><img src="/src/assets/icon_twitter.svg" alt="" /></a>
                    <a href="https://meta.com"><img src="/src/assets/icon_meta.svg" alt="" /></a>
                </div>
            </div>
            <div className="hero_hero">
                <div className="hero_hero_head">
                    <span>Smart</span><span>Accident</span> <span>Reporting</span><span>System</span>
                </div>
                <div className="hero_hero_desc">
                    Real-time accident monitoring using IoT, ML, Web Tech, and Cloud.
                </div>
                <div className="hero_hero_button">
                    <Link style={{color:"inherit"}} to="/register">Get Started <img src="/src/assets/icon_arrow.svg" alt="" /></Link>
                </div>
            </div>
            <div className="hero_other">
                <div className="hero_other_other">

                    <div className="hero_other_other_title">
                        Real-time Detection
                    </div>
                    <div className="hero_other_other_desc">
                        Automatically detects accidents using IoT and machine learning.
                    </div>
                    <div className="hero_other_other_see">
                        <Link to="/how#">See Details</Link>
                    </div>
                </div>
                <div className="hero_other_other">
                    <div className="hero_other_other_title">
                        Location Tracking
                    </div>
                    <div className="hero_other_other_desc">
                        Pinpoints accident locations with GPS coordinates for rapid response.
                    </div>
                    <div className="hero_other_other_see">
                        <Link to="/how#">See Details</Link>
                    </div>
                </div>
                <div className="hero_other_other">
                    <div className="hero_other_other_title">
                        Instant Alerts
                    </div>
                    <div className="hero_other_other_desc">
                        Notifies emergency services instantly for quicker action.
                    </div>
                    <div className="hero_other_other_see">
                        <Link to="/how#">See Details</Link>
                    </div>
                </div>
            </div>
            <div className='hero_blur'></div>
        </div>
    )
}
