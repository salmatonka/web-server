import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
      <Navbar  bg="light"expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Web-Technology-Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Course</Nav.Link>
            <Nav.Link href="#action3">FAQ</Nav.Link>
            <Nav.Link href="#action4">Profile</Nav.Link>
            <Nav.Link href="#action5">Blog</Nav.Link>
            
          </Nav>
          <Form className="d-flex  ">
          <Nav.Link className=" mx-3" href="#action1">Login</Nav.Link>
            <Nav.Link className=" mx-3" href="#action2">LogOut</Nav.Link>
            <Button className=" mx-3" variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;