// Packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var exphbs = require('express-handlebars');

// Routes
var index = require('./routes/html-routes.js');

// Express
var app = express();
var port = process.env.PORT || 8080;

// Handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
// Method-override - Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', index);

// Start Express
app.listen(port, function(err) {
  console.log('Listening on port ' + port);
});