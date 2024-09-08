const multer = require("multer");

// set storage
 const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
         cb(null,`${Date.now()}.${file.originalname}`); 
    }
 })

// iniatialzie the upload

const upload = multer({
    storage:storage,
}).fields([
    
    {name:"forntImage",maxcount:1 },
    {name:"audioFile",maxcount:1 },

]);

module.exports = upload;