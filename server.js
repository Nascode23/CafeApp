// At the top of server.js, requirethe modules; 
// 1:create the Express app;
// 2: mount the morganlogging middleware
// 3: and express.json()middleware that processes JSON data sent in the AJAX request and adds it to the req.body:


const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
require('dotenv').config();
require('./config/database');// Connect to the database


const app = express();

app.use(logger('dev'));
app.use(express.json());


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//listening
const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});




//notes
// const port: This declares a constant variable named port, which will store the port number on which your server will listen for incoming requests.

// process.env.PORT: This is an environment variable that may be set in the environment where your server is running. Environment variables are used to configure various aspects of applications without changing the code. In this case, it's expecting an environment variable named PORT to be set.

// ||: This is the logical OR operator. If the value on the left of the || operator is falsy (undefined, null, false, 0, empty string), the value on the right will be used.

// 3001: This is the fallback port number. If the process.env.PORT is not defined (or falsy), the server will use port 3001 as a default.







