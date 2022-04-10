import './App.css';
import Mn from './Mn';
import About from './About';
import Pricing from './Pricing';
import Doctor from './Doctor';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Button, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mycs from './mycss.module.css';



 

  function App() {
  return (

    <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className={mycs.m1}>
                <Container>
                    <Navbar.Brand href="#home"><img className={mycs.m3} src={require('./image/1.png')}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" className={mycs.m} >
                            <Nav.Link href="#features" className={mycs.m2}><Link to="/" style={{color:"#fff",textDecoration:"none"}}>Home</Link></Nav.Link>
                            <Nav.Link href="#features" className={mycs.m2}><Link to="/about" style={{color:"#fff",textDecoration:"none"}}>About</Link></Nav.Link>
                            <Nav.Link href="#pricing" className={mycs.m2}><Link to="/Pricing" style={{color:"#fff",textDecoration:"none"}}>Pricing</Link></Nav.Link>
                            <Nav.Link href="#pricing" className={mycs.m2}><Link to="/Doctor" style={{color:"#fff",textDecoration:"none"}}>Doctors</Link></Nav.Link>

                            <NavDropdown title="Services" id="collasible-nav-dropdown" className={mycs.m2}>
                                <NavDropdown.Item href="#action/3.1">services Overview</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">services Item</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            {/* <NavDropdown title="Doctors" id="collasible-nav-dropdown" className={mycs.m2}>
                                <NavDropdown.Item href="#action/3.1">Doctors Overview</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Doctors Item</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown> */}
                            <NavDropdown title="Blog" id="collasible-nav-dropdown" className={mycs.m2}>
                                <NavDropdown.Item href="#action/3.1">Blog Home</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Blog Post</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown title="pages" id="collasible-nav-dropdown" className={mycs.m2}>
                                <NavDropdown.Item href="#action/3.1">Appointment</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Signup</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Forgot</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Terms & Conditions</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Privacy Policy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Not Found 404</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    <Routes>
        <Route path="/" element={<Mn />} />
        <Route path="About" element={<About />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Doctor" element={<Doctor />} />

      </Routes>

        
               
  </>
    

  );
}

export default App;
