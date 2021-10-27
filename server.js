
// Load Node modules
var express = require('express');
const ejs = require('ejs');
const fetch = require('node-fetch');
const moment = require('moment'); 
const nodemailer = require("nodemailer");

// Initialise Express
var app = express();

// Render static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(3001);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
/* GET Home page. */
app.get('/home', function(req, res, next) {
    res.render('pages/home');
  });
/* GET Suggestions page. */
  app.get('/suggestions', function (req, res, next) {
    res.render('pages/suggestions');
});
