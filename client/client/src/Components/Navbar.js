import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { getContacts, togglefalse } from '../redux/actions/ContactActions'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function Navigation() {
  const dispatch = useDispatch()
    return (
        <div>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">CONTACT_LIST</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link as={Link} to='/contacts' onClick={()=>dispatch(getContacts())}>Contacts</Nav.Link>
      <Nav.Link as={Link} to='/AddContact' onClick={()=>dispatch(togglefalse())} >Add Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>        
        </div>
    )
}

export default Navigation
