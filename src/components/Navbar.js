import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineFileText, AiFillStar } from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';
import logo from '../Assets/Logo.png';

const CustomNavbar = () => {
  const colors = {
    background: '#003254', 
    accent: '#B79447',     
    text: '#ffffff'        
  };

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ backgroundColor: colors.background }} 
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand className="d-flex" style={{ width: '150px', height: 'auto' }}>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto align-items-center gap-4">
            
            <NavItem icon={<AiOutlineHome />} text="Home" to="/" onClick={() => updateExpanded(false)} />
            <NavItem icon={<AiOutlineUser />} text="About" to="/about" onClick={() => updateExpanded(false)} />
            <NavItem icon={<AiOutlineFundProjectionScreen />} text="Projects" to="/project" onClick={() => updateExpanded(false)} />
            <NavItem icon={<AiOutlineFileText />} text="Resume" to="/resume" onClick={() => updateExpanded(false)} />

          </Nav>



          <Nav className="align-items-center mt-3 mt-md-0">
            <Button 
              style={{ 
                backgroundColor: colors.accent, 
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 15px'
              }}
            >
              <CgGitFork style={{ fontSize: '1.2rem' }} />
              <AiFillStar style={{ fontSize: '1.1rem' }} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


const NavItem = ({ icon, text, to, onClick }) => {
  return (
    <Nav.Link as={Link} to={to} onClick={onClick} className="d-flex flex-column align-items-center text-white nav-item-hover">
      <span style={{ fontSize: '1.2rem', marginBottom: '2px' }}>{icon}</span>
      <span style={{ fontSize: '0.9rem' }}>{text}</span>
      <style>
        {`
          .nav-item-hover:hover {
            color: #B79447 !important;
            transition: color 0.3s ease;
          }
        `}
      </style>
    </Nav.Link>
  );
};

export default CustomNavbar;