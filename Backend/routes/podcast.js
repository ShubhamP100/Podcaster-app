const auth = require("../middleware/auth");
const upload = require("../middleware/multer");
const Category = require("../models/category");
const router = require("express").Router();
const User = require("../models/user");
const Podcast = require("../models/podcasts");


// add podcast
 
router.post("/add-podcast",auth,upload , async(req,res)=>{
   try{
    const {title,description,category} =req.body;
    const forntImage= req.files["frontImage"][0].path;
    const audioFile = req.files["auidoFile"][0].path;
    if(!title || !description || !category || !forntImage || !audioFile){
        return res.status(400).json({message:"All fields are require"});
    }

    const {user} = req;
     const cat = await Category.findOne({categoryname:category});
     if(!cat)
     {
        return res.status(400).json({message:"No category found"})

     }
     const catid = cat._id;
     const userid= user._id;
     const newPodcast = new Podcast({
        title,
        description,
        category:catid,
        forntImage,
        audioFile,
        user:userid,

     });
     await newPodcast.save();
     await Category.findIdAndUpdate(catid,{
        $push:{podcasts:newPodcast._id  },
    });
    await User.findIdAndUpdate(userid,{
        $push:{podcasts:newPodcast._id }
    
    })
    res.status(200).json({message:"Podcast added succesfully"})
}catch(error){
    res.status(200).json({message:"failed"})
}
});
// get all podcasts

router.get("/get-podcast", async (req,res)=>{
    try{
        const podcasts =await Podcast.find()
        .populate("category").sort({createdAt:-1});
        return res.status(200).json({data:podcasts});

    }catch(error){
         return res.status(200).json({message:"Internal error"});
    }
});

// Thoda sa part baki he get podcast by user and other stuff then
// bakcend part over
// get user podcasts
router.get("/get-user-podcast",auth, async (req,res)=>{
    try{
       const {user} = req;
       const userid = user._id;
       const data = await User.findById(userid).populate({
        path:"podcasts",
        populate:{path:"category"},
    })
        // added 
        .select("password");
        if(data && data.podcasts)
        {
            data.podcasts.sort(
                (a,b) => newDate(b.createdAt) = new Date(a.createdAt)
            );
        }
        return res.status(200).json({data:podcasts});

    }catch(error){
         return res.status(200).json({message:"Internal error"});
    }
});

// get podcast by id

router.get("/get-podcast/:id", async (req,res)=>{
    try{
       const {id} = req.params;
       const podcasts = await Podcast.findById(id).populate("category");
        
        return res.status(200).json({data:podcasts});

    }catch(error){
         return res.status(200).json({message:"Internal error"});
    }
});
// get podcast by category
router.get("/category/:cat", async (req,res)=>{
    try{
       const {cat} = req.params;
       const categories = await Category.findById({categoryname: cat}).populate(
        {path:"podcasts", populate:{path:"category"}}
       );
        let podcasts = []
        categories.forEach((category) =>{
            podcasts =[...podcasts,...category.podcasts]
        });
        return res.status(200).json({data:podcasts});
 
    }catch(error){
         return res.status(200).json({message:"Internal error"});
    }
});

module.exports = router;