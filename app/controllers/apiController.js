'use strict';

var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({
	storage: storage
})

var type = upload.single('file');

function ApiHandler() {

	this.postFile = function(req, res) {

		type(req, res, function(err) {
				if (err) {
					res.status(400).send({
						error: err
					});
					return
				};
			});
			res.send({size:req.file.size});
		};




	}

	module.exports = ApiHandler;
