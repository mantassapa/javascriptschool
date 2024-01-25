const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "add title"]
    },
    author:{
        type:String,
        required:[true, "add author"]
    },
    modules:{
        type:[String],
        required:[true, "at least one module is required"]
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model("Course", courseSchema)