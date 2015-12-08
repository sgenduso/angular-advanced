var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

app.get('/', function (req, res) {
  res.send('YOOO!');
});

var PORT = 3001;

app.listen(PORT, function () {
  console.log('Listening on localhost:', PORT);
});
