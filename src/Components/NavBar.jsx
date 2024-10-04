import React from 'react'
import { Link } from 'react-router-dom';
import './../Css/NavBar.css'

export default function NavBar() {
    return (
        <div className='nav'>
            <div className="nav_logo">
                <img src="/src/assets/nav_logo.svg" alt="" />
            </div>
            <div className="nav_menu">
                <div className="nav_menu_menu">
                    <ul>
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
