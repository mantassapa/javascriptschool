const asyncHandler = require("express-async-handler")
const {getUser, notAuthorizedMessege} = require("./helpers/user")

const protectAmin = asyncHandler(async(req,res,next)=>{
    const {status, response } = await getUser(req)
    if(status === 200){
        if(response.role === "admin"){
            req.user = response
            next()
        }else{
            res.send(401, notAuthorizedMessege)
        }
    }else{
        res.send(status, response)
    }
})
module.exports = {protectAmin}