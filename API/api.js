var express = require('express');
var Request = require("request");
var app = express();

host = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1201b6e3e328b3f44a0eea55022f8ae5&hash=ccf44c5caa1c29cd637d3c90e25f97da";

host1 = "https://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=1201b6e3e328b3f44a0eea55022f8ae5&hash=ccf44c5caa1c29cd637d3c90e25f97da";

var lista = '';

Request.get(host, (error, response, body) => {
  if(error) {
    lista = error;
  }
  lista = body;
});

app.get('/Personagens', function(req, res, next) {
res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.parse(lista));
})

app.listen(8000);