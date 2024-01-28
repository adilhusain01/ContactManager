const User = require("../models/contactModel");

//function to retrieve all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await User.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function to retrieve a specific contact by ID
const getContactById = async (req, res) => {
    try {
        const contact = await User.findById(req.params.id);
        if(!contact){
            return res.status(404).json({message: 'Contact not found'});
        } else {
            res.json(contact);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//function to create a new contact
const createContact = async (req, res) => {
    const contact = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function to update a contact by id
const updateContact = async (req, res) => {
    const contact = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});

    try{
        if(!contact){
            return res.status(404).json({message: 'Contact not found'});
        } else {
            res.json(contact);
        }
    }catch(error){
        res.status(400).json({message: error.message});
    }
}


//function to update a contact by id
const deleteContact = async (req, res) => {
    const contact = await User.findByIdAndDelete(req.params.id);
    try{
        if(!contact){
            return res.status(404).json({message: 'Contact not found'});
        } else {
            res.status(204).json();
        }
    } catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getContacts,
    getContactById,
    deleteContact,
    updateContact,
    createContact
}