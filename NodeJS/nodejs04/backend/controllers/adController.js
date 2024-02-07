const Ad = require("../models/adModel")
const asyncHandler = require("express-async-handler")

//create ad
//post /api/ads

const createAd = asyncHandler(async(req,res,next)=>{

    if(!req.body.user||!req.body.text||!req.body.description||!req.body.price){
        res.status(400)
        throw new Error("Please fill all fields")
    }
    const ad = await Ad.create({
        user:req.user.id,
        text:req.body.text,
        description:req.body.description,
        price:req.body.price,
})
})
module.exports = createAd