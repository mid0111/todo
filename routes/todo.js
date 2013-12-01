/*
 * /todos.
 */
var Todo = require('../models/todo');

exports.index = function(req, res) {

  Todo.find('', function(err, docs) {
    if(err) {
      console.log('err!!' + err);
    }
    res.json(docs);
  });
};

