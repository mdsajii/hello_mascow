var express = require('express');
var app = express();
app.get('/', function (req, res) {
 //res.send('Hello World!');
const nDate = new Date().toLocaleTimeString('en-US', {
  timeZone: 'Europe/Moscow'
});

res.send('Hello world! Time is: ' +nDate);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
