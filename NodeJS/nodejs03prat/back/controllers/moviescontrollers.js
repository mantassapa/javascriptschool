const Movie = require("../modules/movies")

//create movie
// @route Post /api/movie

const createMovie = async(req, res)=>{
    if(!req.body.movieAuthor||!req.body.title||!req.body.year||!req.body.genre){
        res.status(404).send("fill inputs!")
    }
    const movie = new Movie({
        movieAuthor:req.body.movieAuthor,
        title:req.body.title,
        year:req.body.year,
        genre:req.body.genre
    })

    const result = await movie.save();
    res.status(200).send(result)
}

//get all movie
//@get /api/dorectors
const getAllMovies = async(req,res)=>{
    const moviesFromDb = await Movie.find()
    if(!moviesFromDb){
        res.status(404).json(moviesFromDb)
        return
    }

    res.status(200).json(moviesFromDb)
}
//update director
//@put /api/directors/:id
const updateMovie = async(req,res)=>{
    const moviesFromDb = await Movie.findById(req.params.id)
    if(!moviesFromDb){
        res.status(404).send("product not found")
        return
    }
    moviesFromDb.genre = req.body.genre

    moviesFromDb.save()
    res.status(200).json(moviesFromDb)
}

//delete movie
//@delete /api/movie/:id
const deleteMovie = async(req,res)=>{
    const moviesFromDb = await Movie.findById(req.params.id)
    if(!moviesFromDb){
        res.status(404).send("product not found")
        return
    }
    const result = await Movie.deleteOne({_id: req.params.id})
    res.status(200).json(result)
}


module.exports = {createMovie, getAllMovies, updateMovie, deleteMovie}