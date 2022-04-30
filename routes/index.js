const express = require('express')
const controller = require('../controllers/index');
const routes = express.Router()

routes.get('/contacts', controller.getContacts)
routes.get('/contact:id', controller.getContact)

module.exports = routes;