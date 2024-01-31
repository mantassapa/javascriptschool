const connectToDb = require("./db")
const express = require("express")

require("dotenv").config()
connectToDb()
const app = express()

app.use(express.json())

const {createDirector, getAllDirectors} = require('./controllers/directorscontroller')
app.post('/api/directors', createDirector)
app.get('/api/directors', getAllDirectors)



app.listen(process.env.PORT, ()=>{
    console.log((`server is running on port ${process.env.PORT}`));
})