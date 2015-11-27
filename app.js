var express = require('express');
var app = express();
app.use(express.static(process.cwd() + '/app'));
app.use(express.static(__dirname + '/node/_modules'));
app.listen(process.env.PORT || 3000);