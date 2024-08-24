import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../App.css';

const Header = () => {
  const Nav_links = [
    {
      path: '/home',
      display: 'Home',
    },
    {
      path: '/about',
      display: 'About',
    },
    {
      path: '/tour',
      display: 'Blog',
    },
    {
      path: '/contact',
      display: 'Contact',
    },
  ];

  return (
    <>
      <Navbar fixed="top" bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className="me-4 nav-link">
            Vijay Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {Nav_links.map((Element, index) => (
                <Nav.Link className="nav-link" key={index} href={Element.path}>
                  {Element.display}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
