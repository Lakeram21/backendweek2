const express = require('express');
const mongodb = require('./db/connect')
const routes = require('./routes/index')
const cors = require('cors');

const app = express();
// app.use(cors());
app.use('/', routes);
const port = process.env.PORT || 8080;

// run server and make connection to the database
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});