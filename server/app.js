var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginroutes');
var usersRouter = require('./routes/users');
var enviarroutes= require('./routes/enviarroutes');
var mostrarroutes= require('./routes/mostrarroutes');
var registraRouter = require('./routes/registrarroutes');
var borradoroutes = require('./routes/borradoroutes');
var inscripcionroutes = require('./routes/incripcionroutes');
var comentarroutes = require('./routes/comentarroutes');
var tomasroutes = require('./routes/tomasroutes');
const myDb = require('./config/mysql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/enviar',enviarroutes )
//app.use('/mostrar',mostrarroutes);
app.use('/registrar', registraRouter);
app.use('/borrar', borradoroutes);
app.use('/inscripcion', inscripcionroutes);
app.use('/comentar', comentarroutes);
app.use('/tomas', tomasroutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
