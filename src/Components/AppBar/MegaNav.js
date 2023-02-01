import React, { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="www.google.com">Brand</a>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="www.google.com"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Services
                        </a>
                        {isDropdownOpen && (
                            <ul className="dropdown-content">
                                <li className="dropdown-item">
                                    <a href="www.google.com">Service 1</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="www.google.com">Service 2</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="www.google.com">Service 3</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
