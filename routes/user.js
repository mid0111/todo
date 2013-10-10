/*
 * /users.
 */
var User = require('../models/user');

exports.index = function(req, res){
  res.send("respond with a resource");
};

exports.create = function(req, res){
  if(!req.is('application/json')) {
    res.send(400, 'Invalid Content-Type is [' + req.get('Content-Type') + '].');
    return;
  }

  var user = new User();
  user.name = req.param('name');
  user.email = req.param('email');
  user.password = req.param('password');

  user.save(function (err) {
    if (err) {
      if(iscConflictData(err)) {
        res.send(409, 'Conflict key.');
        return;
      }
      else {
        res.send(400, 'Failed to regist user.');
        return;
      }
    }

    res.send(201, user);
  });
};

var iscConflictData = function(err) {
  return ('MongoError' == err.name && err.err.indexOf('E11000') === 0);
};