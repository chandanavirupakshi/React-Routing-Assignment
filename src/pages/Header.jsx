import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import AddEmployee from '../components/RestApiCall/AddEmployee';
import Employees from '../components/RestApiCall/Employees';
import Update from '../components/RestApiCall/Update';
import Delete from '../components/RestApiCall/Delete';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
function Header() {
    let styleLink = {
        color:"white",
        fontWeight:"bold",
        textDecoration:"none",
       
    }
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* <Link style={styleLink} to="/home" className=''> Home </Link> */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contactus">Contact us</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

        <BrowserRouter>

        {/* <Button variant="primary"  size="lg"><Link style={styleLink} to="/home" className=''> Home </Link></Button>
        <Button variant="primary" size="lg"> <Link style={styleLink} to="/about"> About Us </Link> </Button>
        <Button variant="primary" size="lg"><Link style={styleLink} to="/contact"> Contact Us </Link> </Button>
        <Button variant="primary" size="lg"><Link style={styleLink} to="/services"> Services </Link> </Button> */}
       
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Add Employee</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Update Employee</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Thrid">Delete Employee</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" path="add-emp">
               <AddEmployee /> 
            </Tab.Pane>
            <Tab.Pane eventKey="second" path="view-emp">
               <Update />
            </Tab.Pane>
            <Tab.Pane eventKey="Thrid" path="del-emp">
               <Delete /> 
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
{/*         <Routes>

                <Route path = "/" element = {<Home/>} />
                <Route path = "/home/" element = {<Home/>}>
                    <Route path= "add-emp" element = {< AddEmployee/>} />
                    <Route path= "view-emp" element = {<Update/>} />
                    <Route path = "del-emp" element = {<Delete/>} />
                </Route>
                <Route path = "/about" element = {<AboutUs/>} />
                <Route path = "/contact" element = {<ContactUs/>} />
                <Route path = "/services" element = {<Services/>} />
        </Routes> */}
</BrowserRouter>
    </div>
  )
}

export default Header;