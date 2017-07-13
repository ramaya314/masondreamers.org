
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var fs = require('fs');
var readline = require('readline');
var googleAuthorizer = require('./googleAuthorizer.js');

var googleDriveProvider = function () {


	var drive = google.drive('v2');

	var module = {};

	var authorizer = {}; //OMITED CODE FOR CONFIDENTIALITY

	module.listFiles = function(onSuccess, onError)  {

		var getTheFiles = function(auth) {

			drive.files.list(
			{
				auth: auth,
				maxResults: 10,
				//spaces: 'photos',
			},  
			function(err, response) {
				if(err) {
					// Handle error
					onError && onError(err);
					return;
				}
				onSuccess && onSuccess(response);
			});
		}


		authorizer.authorizeForCallback(getTheFiles, onError);

	}

	return module;
};


module.exports = googleDriveProvider;