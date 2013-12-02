/*
 * /todos.
 */
var Todo = require('../models/todo');

exports.create = function(req, res) {

  var todo = new Todo();
  todo.title = req.body.title;
  todo.save(function(err) {
    if(err) {
      res.send(500, err);
    } else {
      res.send(201);
    }
  });

};

exports.index = function(req, res) {

  Todo.find('', function(err, docs) {
    if(err) {
      console.log('err!!' + err);
    }
    res.json(docs);
  });
};

