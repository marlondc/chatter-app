var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: tru, minlength: 4, maxlength: 15 },
  password: { type: String, required: true, minlength: 6 }
})
