var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: {
    type: String, 
    index: true
  }
});

module.exports = mongoose.model('Todo', todoSchema);
