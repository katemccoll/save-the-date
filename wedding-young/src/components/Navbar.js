import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from "./Button";

import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/'
                                  className="nav-links"
                                  onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/'
                                  className="nav-links"
                                  onClick={closeMobileMenu}>
                                Details
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/rsvp' className="nav-links">
                                    <Button buttonStyle='btn--outline'>RSVP</Button>
                                </Link>
                            ) : (
                                <Link to='/rsvp' className="btn-link">
                                    <Button
                                        buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                    >RSVP</Button>
                                </Link>
                            )}

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
