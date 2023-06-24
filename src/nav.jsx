import { Icon } from '@iconify/react'
import './stylenavbar.css'
import logo from '/logo.png'
import { useState } from "react";




function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className='navigation'>
            <section >
                <img src={logo} className={isNavExpanded ? "logoexpanded" : "logo"} />
            </section>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                <Icon icon="pajamas:hamburger" />
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <a href="" className="textnav">Explore</a>
                    </li>
                    <li>
                        <a href="" className="textnav">About Us</a>
                    </li>
                    <li>
                        <a href="" className="textnav">Courses</a>
                    </li>
                    <li>
                        <a href="" className="textnav">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar