import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar className="bg-sidebar-color" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#" className="navbar-brand-bold">Code Craft</Navbar.Brand>
          <Navbar.Brand href="#" className="navbar-brand-bold">Logout</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;