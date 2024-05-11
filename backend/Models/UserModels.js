const {Schema, model} = require("../connection")

const UserSchema = new Schema({
    fname : String,
    lname : String,
    email : String,
    password : String,
    
});
 module.exports = model("user", UserSchema)