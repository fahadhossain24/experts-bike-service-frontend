
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../imgaes/logo/download-removebg-preview (1) (2).png'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg='dark' variant="dark">
                <Container>
                    <Navbar.Brand  href="/#nav" style={{height: '55px', width: '100px'}}>
                        <img src={logo} className='h-100 w-100' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" id='nav'>
                            <Nav.Link href="/#services">Services</Nav.Link>
                            <Nav.Link href="/#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;