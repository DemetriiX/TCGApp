import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from '../constants';

import './NavBar.css';

function NavBar() {

    const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand 
            className='linkPocetna'
            onClick={()=>navigate(RoutesNames.HOME)}
        >
            TCGApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item 
                onClick={()=>navigate(RoutesNames.KORISNICI_PREGLED)}
              >
                Korisnici
              </NavDropdown.Item>
              <NavDropdown.Item
              onClick={()=>navigate(RoutesNames.RIJETKOSTI_PREGLED)}
              >
                Rijetkosti
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={()=>navigate(RoutesNames.IGRE_PREGLED)}
              >
                Igre
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={()=>navigate(RoutesNames.SLICICE_PREGLED)}
              >
                Sličice
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={()=>navigate(RoutesNames.KOLEKCIJE_PREGLED)}
              >
                Kolekcije
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link target="_blank" href="https://demetrixia-001-site1.anytempurl.com/swagger/index.html">API dokumentacija</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;