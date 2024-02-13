const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")

//reg users
//@ post /api/users
//@ access PUBLIC

const registerUser = asyncHandler(async(req,res)=>{
    const{firstname, email, password}= req.body

    if(!firstname||!email||!password){
        res.status(401)
        throw new Error("Please fill all fields")
    }
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(402)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        firstname,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            firstname:user.firstname,
            email:user.email,
            token:generateToken(user._id),
            role:user.role,

        })
    }else{
        res.status(403)
        throw new Error("invalid user data")
    }
})
//=>
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}
//

//login user
//@ /api/users/login
const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(user&& (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            firstname: user.firstname,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{ 
        res.status(405)
        throw new Error("ivalid crediancials")
    }
})




module.exports = {registerUser, loginUser}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzM0ZjBkMWI2YzU1YjBmNmE2MDI3NiIsImlhdCI6MTcwNzI5ODU3MywiZXhwIjoxNzA5ODkwNTczfQ.nm2E6hojh8sKngpYnfJ6h3Ovc-wNJQW4V9V9148sH98