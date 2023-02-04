
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../imgaes/logo/download-removebg-preview (1) (2).png'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Header = () => {
    const [signOut] = useSignOut(auth)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut();
        navigate('/login')
    }
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
                            {
                                user ?
                                <button onClick={handleSignOut} className='btn btn-link text-decoration-none text-white'>Signout</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;