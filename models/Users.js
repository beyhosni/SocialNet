/**
 * Created by bey on 28/11/16.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var User_schema = new Schema({
      firstName : { type: String, required:true}
    , lastName : { type: String , required:true}
    , email : {type: String , required:true}
    , password : { type: String}
    , birthday:{type : Date }
    , gender:{type : String} 
});
var Users = mongoose.model('User_schema', User_schema);
module.exports = {
    Users: Users
};

