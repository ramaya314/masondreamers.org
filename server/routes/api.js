const express = require('express')
const router = express.Router()
//const {MainApi} = require('../api')

const {providerFactory} = require('kokolibserv');
const {Utils} = require('kokolib');

module.exports = function(config) {

	var providers = providerFactory(config);

	if(providers) {
		if(providers.sheetsProvider) {

			router.get('/v1/SendDreamDonutFeedback', (req, res) => {
				providers.sheetsProvider.sendDreamDonutFeedback("1XyGKu70eTDivGg31wTdL5fuom-G_uc7ClScHjEQA9OM", req.query, function(response) {
					res.end("Feedback succesfully recorded!");
				}, function(err) {
					res.status(500).end("Feedback send fail!: " + err);
					console.info(err);
				});
			});

			router.get('/v1/SignDacaPetition', (req, res) => {
				providers.sheetsProvider.signDACAPetition("1b8zbSdTQWygTdwVEYBEqGCkCZpSGJprTy1gFN2puO7A", req.query, function(response) {
					res.end("DACA petition succesfully signed!");
				}, function(err) {
					res.status(500).end("DACA petition sign fail!: " + err);
					console.info(err);
				});
			});


			router.get('/v1/GetDacaPetitionSignatures', (req, res) => {
				providers.sheetsProvider.getRowsForRange("1b8zbSdTQWygTdwVEYBEqGCkCZpSGJprTy1gFN2puO7A", "Sheet1", function(response) {
					res.end(JSON.stringify(response));
				}, function(err) {
					res.status(500).end("DACA petition signatures fetch fail!: " + err);
					console.info(err);
				});
			});


			router.get('/v1/GetUndocuAllyDirectory', (req, res) => {
				providers.sheetsProvider.getRowsForRange("15Aq-ciZoZr8JHuoiW-_7UaH4KDsZixEXWK0bbTKzZ-k", "Sheet1!A2:D1000", function(response) {
					res.end(JSON.stringify(response));
				}, function(err) {
					res.status(500).end("UndocuAlly directory fetch fail!: " + err);
					console.info(err);
				});
			});

			router.get('/v1/GetAdvisoryBoardDirectory', (req, res) => {
				providers.sheetsProvider.getRowsForRange("1euJcfv3ucmkVpAdchYw8WXXe6lEYz9tkX3OGwVaWKQY", "Sheet1!A1:B1000", function(response) {
					res.end(JSON.stringify(response));
				}, function(err) {
					res.status(500).end("UndocuAlly directory fetch fail!: " + err);
					console.info(err);
				});
			});

			router.get('/v1/GetEBoardData', (req, res) => {
				providers.sheetsProvider.getRowsForRange("1wJ7EjAOuq9mS-BCDdTWYnWz8tV33f7JTQSltGS2K4s4", "2017-2018!A2:M1000", function(response) {
					res.end(JSON.stringify(response));
				}, function(err) {
					res.status(500).end("EBoard data fetch fail!: " + err);
					console.info(err);
				});
			});

			router.get('/v1/GetFacultyResourceLinks', (req, res) => {
				providers.sheetsProvider.getRowsForRange("1IGWebyuMkIV0PSb8UkrM-UkP7UvTvVPZbbh9MYMfsq0", "Faculty!A1:M1000", function(response) {
					var data = Utils.prepareGSArrayForTable(response);
					res.json(data);
				}, function(err) {
					res.status(500).end("Resource data fetch fail!: " + err);
					console.info(err);
				});
			});

			router.get('/v1/GetOtherResourceLinks', (req, res) => {
				providers.sheetsProvider.getRowsForRange("1IGWebyuMkIV0PSb8UkrM-UkP7UvTvVPZbbh9MYMfsq0", "Other!A1:M1000", function(response) {
					var data = Utils.prepareGSArrayForTable(response);
					res.json(data);
				}, function(err) {
					res.status(500).end("Resource data fetch fail!: " + err);
					console.info(err);
				});
			});

			router.get('/v1/GetScholarships', (req, res) => {
				providers.sheetsProvider.getRowsForRange("1YtD0DBKN3QWaW2kllrEyMuZafgwiHvUzZI3XD5MEDwo", "Scholarships!A1:M1000", function(response) {
					var data = Utils.prepareGSArrayForTable(response);
					res.json(data);
				}, function(err) {
					res.status(500).end("Scholarship data fetch fail!: " + err);
					console.info(err);
				});
			});

			router.get('/SendLobbyForm', (req, res) => {
				providers.sheetsProvider.sendLobbyForm("1bEMTnqVQtd35xQbyRptS9oMXLFgL69esoxNOXrXO0Q4", req.query, function(response) {
					res.end("Your information has been sent succesfully! Thank you!");
				}, function(err) {
					res.status(401).end("Send fail!: " + err);
					console.info(err);
				});
			});

			//double requirement, eventbrite and sheets
			if(providers.eventbriteProvider) {

				router.get('/v1/UpdateEventbriteAtendeeList', (req, res) => {

					var onSuccess = function(data) {
						res.end(JSON.stringify(data));
					}
					var onError = function(error) {
						res.status(500).end(error);
					}

					providers.eventbriteProvider.GetUserEvents([], function(data) {

						var undocuEvents = data.events.filter(function(event) {
							return  event.name && event.name !== null &&
									event.name.text && event.name.text !== null &&
									event.name.text.toLowerCase().indexOf('undocually') >= 0;
						});

						if(undocuEvents.length <= 0) {
							onError && onError("No attendees found for those events");
							return;
						}

						var writeData = function() {
							providers.sheetsProvider.clearRange("1e0kH-Q7gWKUY8mfpx3f1jvf9xBDFgqA4asbGBbt-Vro", "Sheet1!A2:Z10000", function(response) {
								providers.sheetsProvider.batchEventbriteUndocuAllyData("1e0kH-Q7gWKUY8mfpx3f1jvf9xBDFgqA4asbGBbt-Vro", undocuEvents, function() {

									var sheetHref = "https://docs.google.com/spreadsheets/d/1e0kH-Q7gWKUY8mfpx3f1jvf9xBDFgqA4asbGBbt-Vro/edit#gid=0";
									res.send(`
										Data succesfully dumped on the google sheet! <br />
										You can view this data at:
										<a href="${sheetHref}">${sheetHref}</a>
									`);
								}, onError);
							}, onError);
						}

						var i = 0;

						var getAttendeeCallbackRecursive = function(data) {

							undocuEvents[i++].attendees = data;

							if(i < undocuEvents.length) {
								providers.eventbriteProvider.GetEventAtendees(undocuEvents[i].id, getAttendeeCallbackRecursive, onError);
							} else {
								writeData();
							}
						}

						providers.eventbriteProvider.GetEventAtendees(undocuEvents[i].id, getAttendeeCallbackRecursive, onError);

					}, onError);
				});
			}
		}
	}

	//router.get('/', async function(req, res, next) {
	//  const db = new MainApi()
	//  const {text} = await db.getMain()
	//  res.json({text, message: 'This came from the api'})
	//})

	return router;
}
