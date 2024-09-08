const mongoose = require("mongoose");

const category = new mongoose.Schema({
    categoryname:{
        type:String,
        required:[true,"category name is required"],
        unique:true,
    },

    podcasts:[
        {
            type:mongoose.Types.ObjectId,
            ref:"podcasts",
        },
    ],

},
     {timestamps:true}
)

module.exports = mongoose.model("category",category);