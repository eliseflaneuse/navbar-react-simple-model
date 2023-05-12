import React, {useRef} from "react";
import './Navbar.css'
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <div className="logo">
            <h3>Logo</h3>
            </div>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Work</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;