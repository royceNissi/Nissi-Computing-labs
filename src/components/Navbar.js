import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NissiLogo from '../assests/nissi-white.png'
export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
          <img src={NissiLogo} alt="" width='130px' className='nissi-logo--white'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link>
                  <Link to='/'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/ourwork'>Our Work</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/ourWow'>Our Wow</Link>
                </Nav.Link>                                
                <Nav.Link>
                  <Link to='/aboutus'>About Us</Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}