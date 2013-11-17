/*
 * /users.
 */
var User = require('../models/user');

exports.index = function(req, res){
  res.render('users', {title : 'hellohello!!'});
};

exports.create = function(req, res){
  var user = new User();
  user.name = req.param('name');
  user.email = req.param('email');
  user.password = req.param('password');

  user.save(function (err) {
    if (err) {
      console.log(err);
      res.send(400, 'Failed to regist user.');
    }
    res.send(201, user);
  });
};
