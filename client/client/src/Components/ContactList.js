import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function ContactList() {
    
    const contacts = useSelector(state => state.ContactReducer.contacts)
    return (
        <div>
            {contacts.map(contact=> <ContactCard contact={contact} key={contact._id}   ></ContactCard> )}
        </div>
    )
}

export default ContactList
