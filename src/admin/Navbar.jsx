import React, { useState } from 'react';
import { usehostalstore } from '../store/hostal.js';
import './Navbar.css';
import src from "../assets/LOG.png"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const { currentUser, setAccount } = usehostalstore();

    const fetchUserData = async () => {
        if (!currentUser) return;

        const res = await fetch(`/api/user/${currentUser._id}`); // Use currentUser's ID
        const data = await res.json();

        if (data.success) {
            setUserDetails(data.data);
            setShowPopup(true); // Show the popup when user data is fetched successfully
        } else {
            alert(data.message); // Show any error message
        }
    };

    const logout = () => {
        setAccount([]); // Clear the accounts
        window.location.href = "/"; // Redirect to the home page or login page
    };

    return (
        <nav className="navbar">
            <a href="/admin" id='home'><h3 className="logo">Admin</h3></a>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <li className='nav' ><a href="/hostalstud">Hostellers</a></li>
                <li className='nav'><a href="/announ">Announcement</a></li>
                <li className='nav'><a href="/viewcomplaint">View complaints</a></li>
                <li className='nav'><a href="/food">Food</a></li>
                <li>
                    {/* <div id="profile" onClick={fetchUserData}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" className="profile-icon" />
                    </div> */}
                </li>
                <li>
                    <div id="logout" onClick={logout}>
                        <img src={src} alt="Logout" id='wid' className="logout-icon" />
                    </div>
                </li>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                <div className={isMobile ? "line line-cross" : "line"}></div>
                <div className={isMobile ? "line line-cross" : "line"}></div>
                <div className={isMobile ? "line line-cross" : "line"}></div>
            </button>

            
        </nav>
    );
};

export default Navbar;
