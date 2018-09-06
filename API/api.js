var express = require('express');
var Request = require("request");
var app = express();

host = "https://gateway.marvel.com/v1/public/characters";

key = "?ts=1&apikey=1201b6e3e328b3f44a0eea55022f8ae5&hash=ccf44c5caa1c29cd637d3c90e25f97da";

app.get('/Personagens', function(req, res, next) {
res.setHeader("Access-Control-Allow-Origin", "*");
Request.get(host + key, (error, response, body) => {
  res.send(JSON.parse(body));
});
});

app.get('/Personagens/:id', function(req, res, next) {
  var id = "/" + req.params.id;
  res.setHeader("Access-Control-Allow-Origin", "*");
  Request.get(host + id + key, (error, response, body) => {
    res.send(JSON.parse(body));
  });
  })

app.listen(8000);