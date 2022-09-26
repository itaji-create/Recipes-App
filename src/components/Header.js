import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(props) {
  const { pageName } = props

  return (
    <>
        <Navbar bg="light" fixed={ 'top' } expand={'lg'} className="mb-3">
          <Container fluid>
            <img alt="profile icon" src={ profileIcon } />
            <Navbar.Brand href="#">{ pageName }</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Filters
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <SearchBar page={ pageName } />
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Sidebar page={ pageName } />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;