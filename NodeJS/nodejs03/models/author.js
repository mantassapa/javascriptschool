const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, "please add firstname"]
    },
    lastname:{
        type: String,
        required: [true, "please add lastname"]
    },
    about:{
        type: String,
        required: [true, "please add info"]
    },
    date:{type:Date, defoult: Date.now}
})
authorSchema.virtual("books", {
    ref: "books",
    localField: "_id",
    foreignField: "bookAuthor"
})
const Author = mongoose.model("Author", authorSchema)

module.exports = Author