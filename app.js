
/**
 * Module dependencies.
 */

var express = require('express')
  , resource = require('express-resource')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = module.exports = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('mongo:host', 'localhost');
app.set('mongo:db', 'todo');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.set('mongo:host', 'localhost');
  app.set('mongo:db', 'todoDev');
}

// routing
app.resource('users', user);

// db setting
mongoose.connect('mongodb://' + app.get('mongo:host') + '/' + app.get('mongo:db'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
