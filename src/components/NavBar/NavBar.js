import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container style={{display:'flex',flexDirection:'row', width:'100%',height:'50px', marginTop:'10px',marginLeft:'20px'}}>
          <Navbar.Brand href="/home" style={{fontSize:'40px'}}>Portfolio</Navbar.Brand>
          <Nav className="me-auto" style={{display:'flex',flexDirection:'row',marginLeft:'400px',fontSize:'25px'}}>
            <Nav.Link href="/home" style={{marginLeft:'20px',marginRight:'20px'}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{marginLeft:'20px',marginRight:'20px'}}>About</Nav.Link>
            <Nav.Link href="/education" style={{marginLeft:'20px',marginRight:'20px'}}>Education</Nav.Link>
            <Nav.Link href="/project" style={{marginLeft:'20px',marginRight:'20px'}}>Project</Nav.Link>
            <Nav.Link href="/contact" style={{marginLeft:'20px',marginRight:'20px'}}>ContactUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
    </>
  );
}

export default Header;