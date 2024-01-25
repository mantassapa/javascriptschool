const User = require("../models/User")

// @ create user
// @ POST /api/users
const createUaser = async(req,res)=>{
    if(!req.body.name||!req.body.email||!req.body.password){
        res.status(404).send("data is missing")
    }
    

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const result = await user.save()
    res.status(200).send(result)
}

// @ get All users
// @ /api/users

const getAllUsers = async(req,res)=>{
    const usersFromDb = await User.find()
    if(!usersFromDb){
        res.status(404).json(usersFromDb)
        return
    }

    res.status(200).json(usersFromDb)
}

//@ get custom user
//@get /api/users/:id

const getCustomUser = async(req,res)=>{
    const userById = await User.findById(req.params.id)
    if(!userById){
        res.status(404).send("data is missing")
        return
    }

    res.status(200).json(userById)
}

//@ update user
//@get /api/users/:id
const updateUser = async(req,res)=>{
    const userById = await User.findById(req.params.id)
    if(!userById){
        res.status(404).send("data is missing")
        return
    }

    userById.name = req.body.name

    const result = await userById.save();
    res.status(200).json(result)
}

//@ delete user
//@get /api/users/:id

const deleteUser = async(req,res)=>{
    const userById = await User.findById(req.params.id)
    if(!userById){
        res.status(404).send("user is not found")
        return
    }
    const result = await User.deleteOne({_id: req.params.id});
    res.status(200).json(result)
}

module.exports ={ createUaser, getAllUsers, getCustomUser, updateUser, deleteUser}