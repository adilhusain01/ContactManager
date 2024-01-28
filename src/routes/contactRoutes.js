const express = require("express");
const router = express.Router();

const{
    getContacts,
    getContactById,
    createContact,
    deleteCotact,
    updateContact
} = require('./controllers/contactController.js')


// Define routes
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContactById);
router.post('/contacts', createContact);
router.delete('/contacts/:id', deleteCotact);
router.put('/contacts/:id', updateContact);

module.exports = router;