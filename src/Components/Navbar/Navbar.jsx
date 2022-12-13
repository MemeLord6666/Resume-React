import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';


function NavbarCreate() {
  return (
    <Navbar className='Navv' bg="success" expand="lg">
      <Container className='Navv'>
        <Navbar.Brand href="#home" className=' Navvv text-white'>Творческое резюме</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link to="/" className=' lnk text-white text-decoration-none'> Обо мне</Link>
            <Link to="/education" className=' lnk text-white text-decoration-none '> Образование</Link>
            <Link to="/skills" className='lnk text-white text-decoration-none'> Навыки</Link>
            <Link to="experience" className='lnk text-white text-decoration-none'> Опыт работы</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCreate;