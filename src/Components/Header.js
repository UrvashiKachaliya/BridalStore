import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';




function Header() {
  return (
  <Navbar expand="lg" className="p-3" style={{ backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} >
      <Container fluid>
        <Navbar.Brand href="#home" className='fw-semibold fs-2 text-black'>BRIDO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='fw-semibold text-uppercase text-black'>Home</Nav.Link>
            <Nav.Link as={Link} to="/new" className='fw-semibold text-uppercase text-black'>New In</Nav.Link>
            <Nav.Link as={Link} to="/choli" className='fw-semibold text-uppercase text-black'>Lahenga</Nav.Link>
            <Nav.Link as={Link} to="/kurtas" className='fw-semibold text-uppercase text-black'>Kurta Sets</Nav.Link>
            <Nav.Link as={Link} to="/saree"className='fw-semibold text-uppercase text-black'>Sarees</Nav.Link>
            <Nav.Link as={Link} to="/gowns" className='fw-semibold text-uppercase text-black'>Gowns</Nav.Link>
            <Nav.Link as={Link} to="/accessories" className='fw-semibold text-uppercase text-black'>Acessories</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='fw-semibold text-uppercase text-black'>Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" className='fw-semibold text-uppercase text-black'>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" className='fw-semibold text-uppercase text-black'>Sign Up</Nav.Link>
            <Nav.Link href="#link" className='fw-semibold text-uppercase text-black'><LocalMallIcon/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Header;
