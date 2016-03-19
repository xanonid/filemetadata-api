'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();
require('dotenv').load();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
routes(app);

app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
