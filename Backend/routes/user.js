const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
//signup route

router.post("/sign-up",async(req,res)=>{
    try{
       const {username,email,password } =req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        if(username.length<5){
            return res
            .status(400)
            .json({message:"Ussrname must have  5 characters"});
        }
        if(password.length<6){  
            return res
            .status(400) 
            .json({message:"Password must have  6 characters"});
        }
        //Check user exists or not 
        const existingEmail = await User.findOne({ email: email});
        const existingUsername = await User.findOne({ username: username});
        if(existingEmail || existingUsername){
            return res
            .status(409)
            .json({message:"Username or email already  exist "})
        }
              //Now all the parameters matched then we pass a passkey through hasing in the database 
              
              const salt =  await bcrypt.genSalt(10);
              const hashPass =await bcrypt.hash(password,salt);
               const newUser = new User({username,email,password:hashPass});
              await newUser.save();
              return res.status(200).json({message:"Account created"})
    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }
})
 // sign-in route
  router.post("/sign-in", async (req,res)=>{
    try{
      const{email,password} = req.body;
      if(!email || !password){
        return res.status(400).json({message:"All field are required"})
      }
      //checking user exist or not
        //Check user exists or not 
        const existinguser = await User.findOne({ email: email});
        if(!existinguser){
            return res
            .status(400)
            .json({message:"Invalid credentials "})
        }
        // check password is match or not
        const match=await bcrypt.compare(password,existinguser.password);
        if(!match){
            return res
            .status(400)
            .json({message:"Invalid credentials "})
        }
        //Genrative jwt token
       const token =jwt.sign({id:existinguser._id,emial:existingEmail._email},
        process.env.JWT_SECRET,
        {expiresIn:"60d"}
    );
       //se nding this jwt data through cookies
       res.cookie("podcasterUserToken",token,{
           httpOnly :true,
           maxAge:60*24*60*60*100,//60 days
           secure:process.env.NODE_ENV==="production",
           samSite:"None",
       });
       
         return res.status(200).json({
              id:existinguser._id,
              username:existinguser.username,
              email:email,
              message:"Sign-in Succesfully"
       })
    }catch(error){
             res.status(400).jsom({error});
    }
  })

  router.post("/logout",async(req,res)=>{
         res.clearCookie("podcasterUserToken",{
            httpOnly:true,
         });
         res.status(200).json({message:"Logged out"});
  });
  // need to solve the bugg 
   router.get("/check-cookie",async(req,res)=>{
   const token = req.cookies.podcasterUserToken;
   if(!token){
    res.status(200).json({message:"true"});
   }
    res.status(200).json({message:"false"});
});
 //route to fetch the user details
 router.get("/user-details",auth,async(req,res)=>{
   try{
    const {email} = req.user;
    const existingUser = await User.findOne({email:email}).select(
        "password"
    );
    return res.status(200).json({
       user:existingUser,
   });
      return res.status(200)
   }catch(error){
      console.log(error);
      res.status(500).json({error:error});
   }
 });
 
module.exports=router;