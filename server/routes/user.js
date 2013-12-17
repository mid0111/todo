/*
 * /users.
 */
var User = require('../models/user');

exports.create = function(req, res){
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
