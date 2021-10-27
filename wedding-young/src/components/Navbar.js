import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as Scroll} from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showBackground = () => {
        if (window.scrollY <= 750) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    window.addEventListener('scroll', showBackground);

    return (
        <>
            <div className={navbar ? "navbar active" : "navbar"}>
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Scroll to='home'
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                  className="nav-link"
                                    onClick={closeMobileMenu}>
                                Home
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll to='details'
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  className="nav-link"
                                  onClick={closeMobileMenu}>
                                Details
                            </Scroll>
                        </li>
                        <li className="nav-item">
                            <Scroll to='getting-there'
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                  className="nav-link"
                                  onClick={closeMobileMenu}>
                                Getting There
                            </Scroll>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
