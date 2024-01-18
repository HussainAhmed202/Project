import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom"

function BrandExample() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    // clicked logout so remove user info
    localStorage.clear();
    navigate('/')}
   

  return (
    <>
      
      <Navbar className="bg-sidebar-color" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand  href="#" className="navbar-brand-bold">Code Craft</Navbar.Brand>
          <Navbar.Brand onClick={handleClick}  href="#" className="navbar-brand-bold" >Logout</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;