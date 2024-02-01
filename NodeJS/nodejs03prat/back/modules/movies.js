const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movieAuthor:{
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
    genre:{
        type: String,
        required:[true, "please add genre"]
    },
    date:{type:Date, defoult: Date.now}
})

const Movie = mongoose.model("Movies", movieSchema)

module.exports = Movie