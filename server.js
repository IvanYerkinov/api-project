const env = require('dotenv').config();
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const express = require('express')
const app = express()
const port = process.env.PORT

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const mongod = require('./data/api-db');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// Add after body parser initialization!
app.use(expressValidator());

//Middleware
const exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
require('./controllers/texts')(app);

//Listen

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
