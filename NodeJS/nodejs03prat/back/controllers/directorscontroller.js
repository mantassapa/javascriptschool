const Director = require("../modules/directors")

//create director
// @route Post /api/directors

const createdirector = async(req, res)=>{
    if(!req.body.firstname||!req.body.lastname||!req.body.oscars){
        res.status(404).send("fill inputs!")
    }
    const director = new Director({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        oscars:req.body.oscars
    })

    const result = await director.save();
    res.status(200).send(result)
}

//get all directrs
//@get /api/dorectors
const getAllDirectors = async(req,res)=>{
    const directorsFromDb = await Director.find()
    if(!directorsFromDb){
        res.status(404).json(directorsFromDb)
        return
    }

    res.status(200).json(directorsFromDb)
}
//update director
//@put /api/directors/:id
const updateDirector = async(req,res)=>{
    const director = await Director.findById(req.params.id)
    if(!director){
        res.status(404).send("product not found")
        return
    }
    director.firstname = req.body.firstname

    director.save()
    res.status(200).json(director)
}

//delete director
//@delete /api/directors/:id
const deleteDirector = async(req,res)=>{
    const director = await Director.findById(req.params.id)
    if(!director){
        res.status(404).send("product not found")
        return
    }
    const result = await Director.deleteOne({_id: req.params.id})
    res.status(200).json(result)
}


module.exports = {createdirector, getAllDirectors, updateDirector, deleteDirector}