const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "please add title"]
    },
    about:{
        type: String,
        required: [true, "please add info"]
    },
    year:{
        type: Number,
        required: [true, "please add year"]
    },
    date:{type:Date, defoult: Date.now}
})

module.exports = moviesSchema