const Ad = require("../models/adModel")
const asyncHandler = require("express-async-handler")

//create ad
//post /api/ads

const createAd = asyncHandler(async(req,res,next)=>{

    if(!req.body.user||!req.body.text||!req.body.description||!req.body.price||!req.body.url){
        res.status(400)
        throw new Error("Please fill all fields")
    }
    const ad = await Ad.create({
        user:req.user.id,
        text:req.body.text,
        description:req.body.description,
        price:req.body.price,
        url:req.body.url
    })
    if(ad){
        res.status(201).json({
            _id:ad.id,
            firstname:ad.text,
            description:ad.description,
            price:ad.price,
            url:ad.url
        })
    }
})
const getAllAds = asyncHandler(async(req,res,next)=>{
    const adsFromDb = await Ad.find()
    res.status(200).json(adsFromDb)
})
const deleteAd = asyncHandler(async(req,res,next)=>{
    const result = await Ad.deleteOne({_id: req.params.id})
    res.status(200).json(result)
    
})
const updateAd = asyncHandler(async(req,res,next)=>{
    const adFromDb = await Ad.findById(req.params.id)
    adFromDb.text=req.body.text,
    adFromDb.description=req.body.description,
    adFromDb.price=req.body.price,
    adFromDb.url=req.body.url

    adFromDb.save()
    res.status(200).json(adFromDb)
})
module.exports = {createAd, getAllAds, deleteAd, updateAd}