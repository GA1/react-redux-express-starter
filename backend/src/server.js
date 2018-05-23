var express = require('express');
var app = express();

app.get('/api/v1/hello', function (req, res) {
  setTimeout(function(){ res.json({
  	'message': 'Hello world!'
  })}, 1000)
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});