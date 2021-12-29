import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletecontact, getcontact, toggletrue } from '../redux/actions/ContactActions'

function ContactCard({contact}) {
  const dispatch = useDispatch()
    return (
        <div>
          { [
  'Primary'
].map((variant, idx) => (
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>{contact._id}</Card.Header>
    <Card.Body>
      <Card.Title>{contact.name} </Card.Title>
      <Card.Text>
      <Link to={`/contacts/${contact._id}`} ><Button variant="outline-light" onClick={()=> dispatch(getcontact(contact._id)) }>Details</Button>{' '}</Link>  
      </Card.Text>
      <Link to={`/edit/${contact._id}`} ><Button variant="outline-dark" onClick={()=>{dispatch(getcontact(contact._id)) ; dispatch(toggletrue())}} >Edit</Button></Link>
      <Button variant="outline-danger" onClick={()=> dispatch(deletecontact(contact._id)) }>Delete</Button>{' '}
    </Card.Body>
  </Card>
))}
        </div>
    )
}

export default ContactCard
