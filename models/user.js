var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var validator = {
  name: [function(value) {
    if('' === value || undefined === value) {
      return false;
    }
    var regExp = new RegExp('[A-Za-z0-9_]+');
    return regExp.test(value);
  }, 'Fieled format error.'],
  email: [function(value) {
    if('' === value || undefined === value) {
      return false;
    }
    var regExp = new RegExp('[A-Za-z0-9_|@|.]+');
    return regExp.test(value);
  }, 'Fieled format error.']
};

var userSchema = new Schema({
  name: {
    type: String, 
    index: true, 
    unique: true,
    validate: validator.name
  },
  email: {
    type: String, 
    index: true, 
    unique: true,
    validate: validator.email
  },
  password: { type: String}
});

module.exports = mongoose.model('User', userSchema);



