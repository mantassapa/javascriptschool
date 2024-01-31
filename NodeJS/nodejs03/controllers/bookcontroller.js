const { findOne } = require("../models/Author")
const Book = require("../models/book")

//create book
// @route Post /api/books

const createBook = async(req, res)=>{
    if(!req.body.bookAuthor||!req.body.title||!req.body.year||!req.body.pages||!req.body.genre){
        res.status(404).send("fill inputs!")
    }
    const existingBook = await Book.findOne({title: req.body.title})

    if(existingBook){
        return res.status(409).send("book already exists in database")
    }

    const book = await Book.create({
        bookAuthor: req.body.bookAuthor,
        title: req.body.title,
        year: req.body.year,
        pages: req.body.pages,
        genre: req.body.genre,
    })

    res.status(200).json(book)
}

// @ get All books
// @ /api/books

const getAllBooks = async(req,res)=>{
    const booksFromDb = await Book.find()
    if(!booksFromDb){
        res.status(404).json(booksFromDb)
        return
    }

    res.status(200).json(booksFromDb)
}

const getFullInfoAboutBook = async(req,res)=>{
    const booksFromDb = await Book.find().populate(
        "bookAuthor",
        "firstname lastname about id date"
    )
    if(!booksFromDb){
        res.status(404).send("books not found")
        return
    }
    res.status(200).json(booksFromDb)

}

module.exports = {createBook, getAllBooks, getFullInfoAboutBook}