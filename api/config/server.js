// Requires
require('dotenv-safe').load();
var createError = require('http-errors');
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

// Instância do app
var app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(expressSession({
    secret: 'segredo',
    resave: false,
    saveUninitialized: false
}));

// Autoload
consign()
    .include('app/models')
    .then('config/dbConnection.js')
    .then('app/api.js')
    .into(app);

// Catch de erros
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.log("Erro: " + err.message);
    if (err.status == 404) {
        res.send('Página não encontrada! <a href="/">Volte clicando aqui</a>');
        return false;
    }
    res.status(err.status || 500)
});

module.exports = app;