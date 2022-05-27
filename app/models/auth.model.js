const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    userName : String,
    password : String
},{collection : 'users'});


module.exports.UserEntity = mongoose.model('userEntity',userSchema)