import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (  
    <header>
       <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Denny Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Home</Nav.Link>
        <Nav.Link href="/login"><i className="fas fa-user"></i>Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header