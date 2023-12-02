var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactsRouter = require('./routes/contacts'); //inicializados

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //carga unas librerias por defecto en express para loguear o parsear y contenido estatico en carpeta public

//tenemos dos enrutadores
app.use('/', indexRouter); //dirige a uno
app.use('/api/v1/contacts', contactsRouter); //dirige a otro

module.exports = app;
