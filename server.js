
var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var os = require('os');

var googleSheetsProvider = require('./server/googleSheetsProvider.js');
var googleDriveProvider = require('./server/googleDriveProvider.js');
var mailProvider = require('./server/mailProvider.js');
var picasaProvider = require('./server/picasaProvider.js');

var mailMain = new mailProvider();

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  var allowedOrigins = [
    'http://www.masondreamers.org'
  ];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

var smtptransporter  = {}; //OMITED CODE FOR CONFIDENTIALITY

var mdsmtptransporter = {}; //OMITED CODE FOR CONFIDENTIALITY

app.get('/SendMail', (req, res) => {
  mailMain.sendMail(req.query, smtptransporter, function() {
    res.end("mail send success!");
  }, function() {
    res.status(401).end("mail send fail!");
  })
});

app.get('/SendMasonDreamersMail', (req, res) => {

  mailMain.sendMail(req.query, mdsmtptransporter, function() {
    res.end("mail send success!");
  }, function(err) {
    console.info(err);
    res.status(401).end("mail send fail!: " + err);
  })
});

app.get('/SignDacaPetition', (req, res) => {

  var isLocalHost = req.headers.host.toLowerCase().indexOf('localhost') >= 0;
  var dacaPetitionSheetProvider =  = {}; //OMITED CODE FOR CONFIDENTIALITY

  dacaPetitionSheetProvider.signDACAPetition(req.query, function(response) {
    res.end("DACA petition succesfully signed!");
  }, function(err) {
    res.status(401).end("DACA petition sign fail!: " + err);
    console.info(err);
  });
});


app.get('/GetDacaPetitionSignatures', (req, res) => {

  var isLocalHost = req.headers.host.toLowerCase().indexOf('localhost') >= 0;
  var dacaPetitionSheetProvider =  = {}; //OMITED CODE FOR CONFIDENTIALITY
  
  dacaPetitionSheetProvider.getRowsForRange("Sheet1", function(response) {
    res.end(JSON.stringify(response));
  }, function(err) {
    res.status(401).end("DACA petition signatures fetch fail!: " + err);
    console.info(err);
  });
});


app.get('/GetUndocuAllyDirectory', (req, res) => {
  var undocuAllySheetProvider = {}; //OMITED CODE FOR CONFIDENTIALITY

  undocuAllySheetProvider.getRowsForRange("Sheet1!A2:D1000", function(response) {
    res.end(JSON.stringify(response));
  }, function(err) {
    res.status(401).end("UndocuAlly directory fetch fail!: " + err);
    console.info(err);
  });
});

app.get('/GetAdvisoryBoardDirectory', (req, res) => {
  var advisoryBoardSheetProvider = {}; //OMITED CODE FOR CONFIDENTIALITY

  advisoryBoardSheetProvider.getRowsForRange("Sheet1!A1:B1000", function(response) {
    res.end(JSON.stringify(response));
  }, function(err) {
    res.status(401).end("UndocuAlly directory fetch fail!: " + err);
    console.info(err);
  });
});


app.get('/GetGalleryAlbums', (req, res) => {
  var picasaProv = new picasaProvider();

  picasaProv.getAlbums(function(response) {
    res.end(JSON.stringify(response));
  }, function(err) {
    res.status(401).end("failed getting albums!: " + err);
    console.info(err);
  });
});

app.get('/GetAlbumPhotos', (req, res) => {
  var picasaProv = new picasaProvider();

  picasaProv.getPhotos(req.query.albumId, function(response) {
    res.end(JSON.stringify(response));
  }, function(err) {
    res.status(401).end("failed getting albums!: " + err);
    console.info(err);
  });
});

app.get('/GetEBoardData', (req, res) => {
  var gSheetProvider = {}; //OMITED CODE FOR CONFIDENTIALITY

  gSheetProvider.getRowsForRange({} /*OMITED CODE FOR CONFIDENTIALITY*/, function(response) {
    res.end(JSON.stringify(response));
  }, function(err) {
    res.status(401).end("EBoard data fetch fail!: " + err);
    console.info(err);
  });
});

const port = process.env.PORT || 4000;

//start the servers
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});


