const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "please add user name"]
    },
    email:{
        type:String,
        required:[true, "please add an email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true, "please add password"]
    },
    role:{
        type:String,
        default:"simple"
    }

},{
    timestamp:true
})

module.exports=mongoose.model("user", userSchema)