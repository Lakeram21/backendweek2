const express = require('express');
const bodyparser = require('body-parser');
const mongodb = require('./db/connect');
const routes = require('./routes/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require('cors');

//Middlewares
var options = {
  explorer: true
};

const app = express();
app.use(cors());
// app.use(cors);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
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
