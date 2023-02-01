import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MultilevelDropdownNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" onToggle={toggleDropdown} show={dropdownOpen}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown title="Submenu" id="basic-nav-submenu">
                            <NavDropdown.Item href="#action/3.4">Submenu action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Another submenu action</NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MultilevelDropdownNavbar;
