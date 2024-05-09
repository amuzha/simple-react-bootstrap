import React, {useState, useEffect} from "react";

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink as RouterNavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const initialMode = localStorage.getItem('mode') || 'light';
  const [isLightMode, setIsLightMode] = useState(initialMode === 'light');

  const handleClick = () => {
    setIsLightMode(prevMode => !prevMode);
    props.toggleMode();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar-dark navbar-full sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/"><h2>{props.siteName}</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="fs-5 ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={RouterNavLink} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={RouterNavLink} to="/gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
          <div className="ml-2">
            <button
              className={`btn ${isLightMode ? 'light' : 'dark'}`}
              onClick={handleClick}
            >
              <FontAwesomeIcon className="text-white" icon={isLightMode ? faSun : faMoon} />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function NavLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <Nav.Link as={RouterNavLink} to={to} className={isActive ? "active" : ""} {...props}>{children}</Nav.Link>
    );
}

export default Header;