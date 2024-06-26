import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './stylenavbar.css';
import logo from '/logo.png';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

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
                    <li>
                        <Link className="textnav" to="/auth" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>Sign In/Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
