import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function ContactDetails() {
    
    const contact =useSelector(state=> state.ContactReducer.contact)

    return (
        <div>
        {/* <h1>{contact._id}</h1>
        <h2>{contact.name}</h2>
        <h3>{contact.email}</h3>
        <h4>{contact.age}</h4>
        <h5>{contact.favoriteFoods}</h5>     */}
                     { [
  'Info'
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
     {contact.email}
     <br/>
     {contact.age}
     <br/>
     {contact.favoriteFoods}
      </Card.Text>

    </Card.Body>
  </Card>
))} 
        </div>
    )
}

export default ContactDetails
