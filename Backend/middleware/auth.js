const jwt = require("jsonwebtoken");
const User= require("../models/user");


const auth= async (req,res,next)=>{
    const token = req.cookies.podcasterUserToken;
    try{
        if(token){
            const decode = jwt.verify(token,process.env.JWT_SECRET);
          const user = await User.findById(decode.id); 
         if(!user){
            return res.status(404).json({message:"usernot found"});
         }
         req.user = user;
         next();
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Invalid Token"})
    }
} 

module.exports = auth;