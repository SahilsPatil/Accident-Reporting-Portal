import React from 'react'
import './../Css/Hero.css'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero_blur'></div>
            <div className="hero_side">
                <div className="hero_side_menu">
                    <li>Help</li>
                    <li>How it Works</li>
                </div>
                <div className="hero_side_social">
                    <img src="/src/assets/icon_linkdin.svg" color='#FCFCFC' alt="" />
                    <img src="/src/assets/icon_messanger.svg" alt="" />
                    <img src="/src/assets/icon_twitter.svg" alt="" />
                    <img src="/src/assets/icon_meta.svg" alt="" />
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
                    Get Started <img src="/src/assets/icon_arrow.svg" alt="" />
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
                        See details
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
                        See details
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
                        See details
                    </div>
                </div>
            </div>
        </div>
    )
}
