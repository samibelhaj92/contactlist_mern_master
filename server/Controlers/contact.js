const ContactSchema = require('../models/contact')

// method post - AddContact
// req.body
// path /

exports.AddContact= async (req,res)=> {
    const {email}=req.body    
        try {
            const newContact = new ContactSchema(req.body)
    
            const found = await ContactSchema.findOne({email})
            if (found) {return res.status(400).send(`${email} is already exists`)}
    
            await newContact.save()
    
            res.status(200).send({msg:'contact added', newContact})
    
        } catch (error) {
            res.status(500).send('could not add contact')
        }
    }

    // method get 1/2 - ShowContacts
    // path /

exports.ShowContacts= async (req, res)=> {
    
    try {
        const CollectionContact= await ContactSchema.find()
        res.status(200).send({msg:'list of contacts', CollectionContact})

    } catch (error) {
        res.status(500).send('could not get contacts')
    }
}

// method get 2/2 - ShowContactByID
// req.params
// path /:id

exports.ShowContactByID= async (req,res)=>{
    const {id}= req.params
    try {
        const foundContact = await ContactSchema.findById(id)
        res.status(200).send({msg:'contact found', foundContact})
    } catch (error) {
        res.status(500).send(`could not get ${id}`)
    }
}

// method put - UpdateContact
// req.params req.body
// path /:id

exports.UpdateContact= async (req,res)=>{
    const {id}= req.params
    try {
        const updated= await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({msg:'contact updated', updated})
    } catch (error) {
        res.status(500).send(`could not update ${id}`)
    }
}

// method delete - DeleteContact
// req.params
// path /:id

exports.DeleteContact= async (req,res)=>{
    const {id}=req.params
        try {
            const deleted= await ContactSchema.findByIdAndDelete(id)
            res.status(200).send({msg:'contact deleted', deleted})
        } catch (error) {
            res.status(500).send('could not delete contact')
        }
    }