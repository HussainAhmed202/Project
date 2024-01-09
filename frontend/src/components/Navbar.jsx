// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


// function OffcanvasExample() {
//     const specificExpand = 'xxl'; // Choose the desired breakpoint (e.g., 'md')

//     return (
//         <>
//             <Navbar expand={specificExpand} className="bg-body-tertiary mb-3">
//                 <Container fluid>
//                     <Navbar.Brand href="#">Code Craft</Navbar.Brand>
//                     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${specificExpand}`} />
//                     <Navbar.Offcanvas
//                         id={`offcanvasNavbar-expand-${specificExpand}`}
//                         aria-labelledby={`offcanvasNavbarLabel-expand-${specificExpand}`}
//                         placement="start"
//                     >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${specificExpand}`}>
//                                 Offcanvas
//                             </Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <Nav className="justify-content-end flex-grow-1 pe-3">
//                                 <Nav.Link href="#action1">Home</Nav.Link>
//                                 <Nav.Link href="#action2">Link</Nav.Link>
//                                 <NavDropdown
//                                     title="Dropdown"
//                                     id={`offcanvasNavbarDropdown-expand-${specificExpand}`}
//                                 >
//                                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action4">
//                                         Another action
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Divider />
//                                     <NavDropdown.Item href="#action5">
//                                         Something else here
//                                     </NavDropdown.Item>
//                                 </NavDropdown>
//                             </Nav>
//                             <Form className="d-flex">
//                                 <Form.Control
//                                     type="search"
//                                     placeholder="Search"
//                                     className="me-2"
//                                     aria-label="Search"
//                                 />
//                                 <Button variant="outline-success">Search</Button>
//                             </Form>
//                             <ButtonGroup vertical>
//                                 <Button>Button</Button>

//                                 <DropdownButton
//                                     as={ButtonGroup}
//                                     title="Dropdown"
//                                     id="bg-vertical-dropdown-3"
//                                 >
//                                     <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
//                                     <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
//                                 </DropdownButton>
//                             </ButtonGroup>
//                         </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default OffcanvasExample;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>

      <Navbar className="bg-sidebar-color" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-bold">
            {/* <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Code Craft
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;