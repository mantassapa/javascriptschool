const jwt = require("jsonwebtoken")
const User = require("../../models/userModel")

const NOT_AUTHORIZED = "Not authorized"
const NO_TOKEN_NOT_AUTHORIZED = "Not authorized, no token"

async function getUser(req){
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))//iesko atutorizacijos kuri prasideda bearer
    {
        try {
            const token = req.headers.authorization.split(" ")[1]//imamas pats token
            
            if(!token){
                return {status: 401, reswponse: NO_TOKEN_NOT_AUTHORIZED }//nrea token error
            }
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET)//atsikoduojame token
            const user = await User.findById(decoded.id).select("-password")//susirandam user pagal to password info
            return {status: 200, response: user }//viskas ok grazink user
        } catch (err) {
            return {status: 401, response: NOT_AUTHORIZED }//nerand user
        }
    }
    return {status: 401, response: NOT_AUTHORIZED }
}
module.exports = {getUser, notAuthorizedMessege: NOT_AUTHORIZED}