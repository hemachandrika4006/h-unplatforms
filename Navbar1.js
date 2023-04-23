import './Navbar1.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


  function Navbar1(){
    return(
      
          <Navbar className='navbar-nav'>
            <Container >
              
          
              <Navbar.Collapse id="basic-navbar-nav" className='m1'>
                <Nav >
                 
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#Mycalender">MyCalender</Nav.Link>
                  <NavDropdown title="Widgets" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  
                  </NavDropdown>
                <img src="https://tse4.mm.bing.net/th?id=OIP.keIG-gLYH4XdTkLvAFqI2QHaEo&pid=Api&P=0" alt=" " width="40px" height="40px" className='i'></img>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }
      
     
  export default Navbar1;