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
const getContactByID = async (req, res) => {
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
        res.status(500).json(message: error.message);
    }
}

//function to update a contact by id
const updateContact = async (req, res) => {
    const contact = User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!contact){
        return res.status(404).json({message: 'Contact not found'});
    }
}