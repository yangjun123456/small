var express = require('express');
var app = express();

app.locals.strftime = require('strftime');

// 定义变量
app.title = '12312';

app.get('/', function (req, res) {
  console.log(app.locals.strftime);
  res.send('hello world' + app.title+"  strftime   " + app.locals.strftime);
});


app.listen(3000, function () {
  console.log('jianting中');
});
