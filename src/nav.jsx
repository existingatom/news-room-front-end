import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth0 } from "@auth0/auth0-react";
import './stylenavbar.css';
import logo from '/logo.png';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <nav className={isNavExpanded ? "navigationexpanded" : "navigation"}>
            <section>
                <img src={logo} className={isNavExpanded ? "logoexpanded" : "logo"} />
            </section>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                <Icon icon="pajamas:hamburger" />
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <Link className="textnav" to="/home" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>Home</Link>
                    </li>
                    <li>
                        <Link className="textnav" to="/explore" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>Explore</Link>
                    </li>
                    <li>
                        <Link className="textnav" to="/slider" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>About Us</Link>
                    </li>
                    <li>
                        <Link className="textnav" to="/learn" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>Courses</Link>
                    </li>
                    <li>
                        <Link className="textnav" to="/contact" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>Contact Us</Link>
                    </li>
                    <li className="auth-button">
                        {!isAuthenticated ? (
                            <button className="textnav" onClick={() => loginWithRedirect()}>Log In</button>
                        ) : (
                            <button className="textnav" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
