var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {
    type: String, 
    required: true, 
    index: true, 
    unique: true
  },
  email: {
    type: String, 
    required: true, 
    index: true, 
    unique: true
  },
  password: { type: String}
});

module.exports = mongoose.model('User', userSchema);
