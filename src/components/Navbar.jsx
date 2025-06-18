import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h4>Hello Navbar</h4>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({isActive})=> isActive ? "active-link" : ""}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({isActive})=> isActive ? "active-link" : ""} >About</NavLink></li>
                        <li><NavLink to="/dashboard" className={({isActive})=> isActive ? "active-link" : ""}>Dashboard</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar