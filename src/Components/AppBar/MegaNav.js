import React, { useState } from 'react';
import './MegaNav.css';

const MegaNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <a className="navbar-brand" href="www.google.com">
                    React Mega Navbar
                </a>
                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={toggleDropdown}
                >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="www.google.com"
                            onClick={toggleDropdown}
                        >
                            Dropdown 1
                        </a>
                        <div
                            className={`dropdown-menu ${isOpen ? 'show' : ''}`}
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="www.google.com">
                                Action 1
                            </a>
                            <a className="dropdown-item" href="www.google.com">
                                Action 2
                            </a>
                            <a className="dropdown-item" href="www.google.com">
                                Action 3
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="www.google.com"
                            onClick={toggleDropdown}
                        >
                            Dropdown 2
                        </a>
                        <div
                            className={`dropdown-menu ${isOpen ? 'show' : ''}`}
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="www.google.com">
                                Action 1
                            </a>
                            <a className="dropdown-item" href="www.google.com">
                                Action 2
                            </a>
                            <a className="dropdown-item" href="www.google.com">
                                Action 3
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MegaNavbar;
