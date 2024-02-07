const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    text:{
        type:String,
        required:[true, "please add text"]
    },
    description:{
        type:String,
        required:[true, "please add description"]
    },
    price:{
        type:Number,
        required:[true, "please add info price"]
    },
    },
    {
        timestamp:true
    }
)
module.exports = mongoose.model("Ad", adSchema)