import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar(){
    return(
      <div className='check'>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/book/listing">Add Books</Nav.Link>
            
             <Nav.Link href="/login">login/Register</Nav.Link>
              
             <Nav.Link href="/test">Tests</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default MyNavbar;