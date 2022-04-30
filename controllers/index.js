const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId
const getContacts = async (req, res) => {

    const result = await mongodb.getDb().db('test').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
}

const getContact = async (req, res) => {
    const params = req.params.id;
    // const result = mongodb.getDb().db('test').collection('contacts').find({ firstName: "Ana" });
    const result = mongodb.getDb().db('test').collection('contacts').find({ _id: new ObjectId(params) });
    result.toArray().then((contact) => {
        res.send(contact[0])
    })
}


module.exports =
{
    getContacts,
    getContact,
}