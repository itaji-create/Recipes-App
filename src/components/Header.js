import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(props) {
  const { pageName, filters, href } = props

  return (
    <Navbar className="navbar-with-shadow" bg="light" fixed={ 'top' } expand={'lp'}>
      <Container fluid>
        <Navbar.Brand href={ href }>{ pageName }</Navbar.Brand>
        {filters && (
          <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <h4>Filters</h4>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-around flex-grow-1 mt-auto">
                  <p />
                  <SearchBar page={ pageName } />
                  <br />
                  <Sidebar page={ pageName } />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
