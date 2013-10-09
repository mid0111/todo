var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String,index: true },
  email: { type: String },
  password: { type: String}
});

module.exports = mongoose.model('User', userSchema);
