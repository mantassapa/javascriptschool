const connsectToDb = require("./database.js")
const express = require("express")

require("dotenv").config()

connsectToDb()
const app = express()

app.use(express.json())

const {createAuthor, getAuthorWithBooks} = require("./controllers/authorController")
app.post("/api/authors", createAuthor)
app.get("/api/books/fulldata", getAuthorWithBooks)

const {createBook, getAllBooks, getFullInfoAboutBook} = require("./controllers/bookcontroller")
app.post("/api/books", createBook)
app.get("/api/books", getAllBooks)
app.get("/api/books/full", getFullInfoAboutBook)


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})