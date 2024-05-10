import mongoose from ("mongoose");

mongoose.connect("use your mongo url");

const userSchema =  new mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String,
})

const User = new mongoose.model("User", userSchema);

//  i can either use this 


module.exports= User;

// but its used for only one module to export so below there is better way to export it 
module.export = {
    User
}