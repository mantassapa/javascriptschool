const Director = require("../modules/directors")

// @ create user
// @ POST /api/directors
const createDirector = async(req,res)=>{
    if(!req.body.firstname||!req.body.lastname||!req.body.oscars){
        res.status(404).send("data is missing")
    }
    

    const director = new Director({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        oscars: req.body.oscars
    })

    const result = await director.save()
    res.status(200).send(result)
}

//get director
//@get /api/directors

const getAllDirectors = async(req,res)=>{
    const directorFromDb = await Director.find()
    if(!directorFromDb){
        res.status(404).json(directorFromDb)
        return
    }
    res.status(200).json(directorFromDb)

}


//delete director
//@delete /api/directors/:id

const deleteDirector = async(req,res)=>{
    const director = Director.find((prod)=>prod.id===parseInt(req.params.id))
    if(!director)
}


module.exports = {createDirector, getAllDirectors}

