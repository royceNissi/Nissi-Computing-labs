import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NissiLogo from '../assests/nissi-blue-logo.png'
import { useState } from 'react';
import { useLocation } from "react-router-dom";
export const Navigation=()=> {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  function expandAndScroll(){
    setExpanded(false)
    window.scrollTo(0, 0)
  }
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
                  <Link to='/'className={pathname==='/'?'nav-links-clicked':'nav-links'}onClick={expandAndScroll}>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/our-work'className={pathname==='/our-work'?'nav-links-clicked':'nav-links'} onClick={expandAndScroll}>Our Work</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/our-wow'className={pathname==='/our-wow'?'nav-links-clicked':'nav-links'}onClick={expandAndScroll}>Our Wow</Link>
                </Nav.Link>                                
                <Nav.Link>
                  <Link to='/about-us'className={pathname==='/about-us'?'nav-links-clicked':'nav-links'}onClick={expandAndScroll}>About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/contact-us'className={pathname==='/contact-us'?'nav-links-clicked':'nav-links'}onClick={expandAndScroll}>Contact Us</Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}