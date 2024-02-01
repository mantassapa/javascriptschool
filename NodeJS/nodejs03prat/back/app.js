const connectToDb = require("./db")
const express = require("express")

require("dotenv").config()
connectToDb()
const app = express()

app.use(express.json())

const {createdirector, getAllDirectors, updateDirector, deleteDirector} = require('./controllers/directorscontroller')
app.post('/api/directors', createdirector)
app.get('/api/directors', getAllDirectors)
app.put('/api/directors/:id', updateDirector)
app.delete('/api/directors/:id', deleteDirector)

const {createMovie, getAllMovies, updateMovie, deleteMovie} = require("./controllers/moviescontrollers")
app.post('/api/movies', createMovie)
app.get('/api/movies', getAllMovies)
app.put('/api/movies/:id', updateMovie)
app.delete('/api/movies/:id', deleteMovie)


app.listen(process.env.PORT, ()=>{
    console.log((`server is running on port ${process.env.PORT}`));
})