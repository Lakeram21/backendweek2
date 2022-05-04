const express = require('express');
const bodyparser = require('body-parser');
const mongodb = require('./db/connect');
const routes = require('./routes/index');

//Middlewares
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());


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
