import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addcontact, editcontact } from '../redux/actions/ContactActions'

function AddContact() {
    
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [age, setAge]=useState(0)
    const [favoriteFoods, setFavoriteFoods]=useState('')
    
const dispatch = useDispatch()
const navigate = useNavigate()
const contact = useSelector(state=>state.ContactReducer.contact)
const edit = useSelector(state=>state.ContactReducer.edit)

useEffect(() => {
if (edit) { setName(contact.name); setEmail(contact.email); setAge(contact.age); setFavoriteFoods(contact.favoriteFoods) }
else {setName(''); setEmail(''); setAge(0); setFavoriteFoods('')}
}, [])

    return (
    <div>
    <Form>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={(e)=>setName(e.target.value)} value={name}  type="text" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control onChange={(e)=>setAge(e.target.value)} value={age}  type="number" placeholder="Enter age" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Favorite Foods</Form.Label>
    <Form.Control onChange={(e)=>setFavoriteFoods(e.target.value)} value={favoriteFoods}  type="text" placeholder="Enter favorite foods" />
  </Form.Group>

{edit ?  
<Button variant="outline-dark" onClick={(e)=>{ e.preventDefault() ; dispatch(editcontact( contact._id, {name, email, age, favoriteFoods} ))}}>Edit Contact</Button> :
  <Button variant="outline-dark" onClick={(e)=>{ e.preventDefault() ; dispatch(addcontact({name, email, age, favoriteFoods}, navigate))}}>Add Contact</Button>}
</Form>        
        </div>
    )
}

export default AddContact
