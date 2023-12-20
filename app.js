var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//router (1)
var toyRouter = require('./routes/toy');
var orderRouter = require('./routes/order');
var app = express();

//mongoose
var mongoose = require('mongoose');
var uri = "mongodb+srv://anhldtgdh210341:ta26032003@cluster0.3fiilxo.mongodb.net/";
mongoose.connect(uri)
.then(() => { console.log ("db ok")});

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//router (2)
app.use('/toy', toyRouter);
app.use('/order', orderRouter);

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

var port = process.env.PORT || 5000
app.listen(port)

module.exports = app;