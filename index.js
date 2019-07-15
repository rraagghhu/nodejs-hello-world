var http = require('http');
var express = require('express');

var app = express();

app.get('/api/v0/suggest-reads/test', (req, res, next) => {
	return res.json({message: 'ok'})
})


var port = 80;
app.listen(port)
