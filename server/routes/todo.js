/*
 * /todos.
 */
var Todo = require('../models/todo');

exports.create = function(req, res) {

  var todo = new Todo();
  todo.title = req.body.title;
  todo.save(function(err) {
    todo.save(function(err, todo) {
      if(err) {
        return next(err);
      }
      res.send(201, todo);
    });
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

exports.update = function(req, res, next) {
  var id = req.params.todo;
  Todo.update({_id: id}, {title: req.body.title}, function(err) {
    if(err) {
      return next(err);
    }
    res.send(204);
  });
};

exports.destroy = function(req, res) {
  var id = req.params.todo;

  Todo.remove({_id: id}, function(err) {
    if(err) {
      console.log('err!!' + err);
      res.send(500, err);
    }
  });

  res.send(204);
};
