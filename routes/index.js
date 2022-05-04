const express = require('express');
const controller = require('../controllers/index');
const routes = express.Router();

// Get Data Routes
routes.get('/contacts', controller.getContacts);
routes.get('/contact:id', controller.getContact);

// Delete Routes
routes.delete('/contact/deletecontact:id', controller.deleteContact);

// Update Routes
routes.put('/contact/id-to-modify:id', controller.updateContact);

// Create Routes
routes.post('/contact/createcontact', controller.createContact);

module.exports = routes;
