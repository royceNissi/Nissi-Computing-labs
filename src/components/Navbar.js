import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NissiLogo from '../assests/nissi-blue-logo.png'
import { useState } from 'react';
export const Navigation=()=> {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar expanded={expanded} sticky='top' expand="lg" className='dark'variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
             <img src={NissiLogo} alt="" width='130px' className='nissi-logo-navbar'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" 
        onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link>
                  <Link to='/'className='nav-links'onClick={() => setExpanded(false)}>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/our-work'className='nav-links' onClick={() => setExpanded(false)}>Our Work</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/our-wow'className='nav-links'onClick={() => setExpanded(false)}>Our Wow</Link>
                </Nav.Link>                                
                <Nav.Link>
                  <Link to='/about-us'className='nav-links'onClick={() => setExpanded(false)}>About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/contact-us'className='nav-links'onClick={() => setExpanded(false)}>Contact Us</Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}