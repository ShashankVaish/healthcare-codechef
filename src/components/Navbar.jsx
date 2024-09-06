import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo">Healthcare</div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li className="dropdown">
                <a  className="dropbtn">Specialities</a>
                <div className="dropdown-content">
                    <a href="#">Orthopaedics and Joint Replacement (Bone)</a>
                    <a href="#">Cardiology</a>
                    <a href="#">Neurology</a>
                    <a href="#">sexual organ</a>
                </div>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar