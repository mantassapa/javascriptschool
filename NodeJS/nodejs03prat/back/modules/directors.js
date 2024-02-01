const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, "please add firstname"]
    },
    lastname:{
        type: String,
        required: [true, "please add lastname"]
    },
    oscars:{
        type: Number,
        required: [true, "please add oscars"]
    },
    date:{type:Date, defoult: Date.now}
})

const Director = mongoose.model("Director", directorSchema)
module.exports = Director