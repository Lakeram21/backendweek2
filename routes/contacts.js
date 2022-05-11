const express = require('express');
const controller = require('../controllers/contacts');
const routes = express.Router();

// Get Data Routes
routes.get('/', controller.getContacts);
routes.get('/:id', controller.getContact);

// Delete Routes
routes.delete('/:id', controller.deleteContact);

// Update Routes
routes.put('/:id', controller.updateContact);

// Create Routes
routes.post('/', controller.createContact);

module.exports = routes;
