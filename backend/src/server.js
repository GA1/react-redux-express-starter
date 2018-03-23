var express = require('express');
var app = express();

app.get('/api/v1/characters', function (req, res) {
  var dummyCharacter = {
    'simplifiedCharacter': '的',
      'hskLevel': 1,
      'pinyin': 'de',
  }
  res.json([dummyCharacter])
  //res.send('Hello World!');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});