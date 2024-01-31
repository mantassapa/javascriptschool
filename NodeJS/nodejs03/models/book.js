const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookAuthor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    title:{
        type: String,
        required:[true, "please add title"]
    },
    year:{
        type: Number,
        required:[true, "please add years"]
    },
    pages:{
        type: Number,
        required:[true, "please add page quantity"]
    },
    genre:{
        type: String,
        required:[true, "please add genre"]
    },
    date:{type:Date, defoult: Date.now}
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book