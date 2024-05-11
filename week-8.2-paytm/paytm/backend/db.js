const mongoose = require("mongoose")

mongoose.connect("ur mongo url");

const userSchema =  new mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String,
})

const User = new mongoose.model("User", userSchema);


const AccountSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
})
const Account = mongoose.model("Account",AccountSchema)

//  i can either use this 
// module.exports= {User};

// but its used for only one module to export so below there is better way to export it 
module.exports = {
    User,
    Account
    
}