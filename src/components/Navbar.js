import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NissiLogo from '../assests/nissi-white.png'
export const Navigation=()=> {
  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand="lg" className='dark'variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
             <img src={NissiLogo} alt="" width='130px' className='nissi-logo-navbar'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link>
                  <Link to='/'className='nav-links'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/our-work'className='nav-links'>Our Work</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/our-wow'className='nav-links'>Our Wow</Link>
                </Nav.Link>                                
                <Nav.Link>
                  <Link to='/about-us'className='nav-links'>About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/contact-us'className='nav-links'>Contact Us</Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}