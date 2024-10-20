import React from 'react'
import { Link } from 'react-router-dom';
import './../Css/NavBar.css'

export default function NavBar() {
    return (
        <div className='nav'>
            <div className="nav_logo">
                <Link to="/"><img src="/src/assets/nav_logo.svg" alt="" /></Link>
            </div>
            <div className="nav_menu">
                <div className="nav_menu_menu">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/dashboard"><li>Dashboard</li></Link>
                        <Link to="/about"><li>About Us</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
