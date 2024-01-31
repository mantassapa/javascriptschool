const Author = require("../models/Author")

//create author 
// @route Post /api/authors

const createAuthor = async(req, res)=>{
    if(!req.body.firstname||!req.body.lastname||!req.body.about){
        res.status(404).send("fill inputs!")
    }
    const author = new Author({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        about:req.body.about
    })

    const result = await author.save();
    res.status(200).send(result)
}

//@get route /api/books/fulldata
const getAuthorWithBooks=async(req,res)=>{
    const authorWithBooks = await Author.aggregate([{
        $lookup:{
            from: "books",
            localField:"_id",
            foreignField:"bookAuthor",
            as:"books"
        }
    }])

    if(!authorWithBooks){
        res.status(404).send("author not found")
        return
    }
    res.status(200).json(authorWithBooks)
}

module.exports = {createAuthor, getAuthorWithBooks}