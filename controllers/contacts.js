const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

/*******************************************
 * Getting all the contacts in the Db
 * *************************************/
const getContacts = async (req, res) => {
  const result = await mongodb.getDb().db('test').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

/**************************************
 * Getting a single Contact in the DB
 * ************************************* */
const getContact = async (req, res) => {
  const params = req.params.id;
  const result = mongodb
    .getDb()
    .db('test')
    .collection('contacts')
    .find({ _id: new ObjectId(params) });
  result.toArray().then((contact) => {
    res.send(contact[0]);
  });
};

/*****************************************************
 * Creating a Contact in the DB
 * ****************************************** */
const createContact = async (req, res) => {
  const newContact = req.body;
  console.log(newContact);
  const result = mongodb
    .getDb()
    .db('test')
    .collection('contacts')
    .insertOne(newContact, (err, result) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json(result);
    });
};

/*****************************************************
 * deleting a Contact in the DB
 * ****************************************** */
const deleteContact = async (req, res) => {
  const params = req.params.id;
  const result = mongodb
    .getDb()
    .db('test')
    .collection('contacts')
    .deleteOne({ _id: new ObjectId(params) }, (err, result) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send('Deleted');
    });
};

/*****************************************************
 * Updating a Contact in the DB
 * ****************************************** */
const updateContact = async (req, res) => {
  const updatedContact = req.body;
  const params = req.params.id;

  // find the
  const result = mongodb
    .getDb()
    .db('test')
    .collection('contacts')
    .findOneAndUpdate({ _id: new ObjectId(params) }, { $set: updatedContact }, (err, result) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(result);
    });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
};
