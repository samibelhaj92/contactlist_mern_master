const express = require('express')
const { ShowContactByID, AddContact, ShowContacts, UpdateContact, DeleteContact } = require('../Controlers/contact')

const Route = express.Router()

Route.post('/', AddContact)

Route.get('/', ShowContacts)

Route.get('/:id', ShowContactByID)

Route.put('/:id', UpdateContact)

Route.delete('/:id', DeleteContact)

module.exports = Route