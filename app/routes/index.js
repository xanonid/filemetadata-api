'use strict';

var fs=require("fs");
//var renderme = require("renderme");
var path = require("path");

var cwd = process.cwd();
var ApiHandler = require(cwd + '/app/controllers/apiController.js');

var multer  = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })


module.exports = function (app) {

	var apiHandler = new ApiHandler();

    app.route("/").
    get(function(req,res) {
      res.render(cwd + "/app/templates/index.html");
    });

	 app.route('/')
		.post(upload.single('file'),apiHandler.postFile);
		
}
