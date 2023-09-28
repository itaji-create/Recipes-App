import React from 'react';
// import profileIcon from '../images/profileIcon.svg';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(props) {
  const { pageName, filters, href } = props

  return (
    <Navbar className="navbar-with-shadow" bg="light" fixed={ 'top' } expand={'lp'} c>
      <Container fluid>
        {/* <img alt="profile icon" src={ profileIcon } /> */}
        <Navbar.Brand href={ href }>{ pageName }</Navbar.Brand>
        {filters === 'true' ? (
          <>
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
          </>
        ): <i />}
      </Container>
    </Navbar>
  );
}

export default Header;
