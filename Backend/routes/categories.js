const router = require("express").Router();
const Cat = require("../models/category")
// adding category to the api

router.post("/add-category",async (req,res) =>{
    const  {categoryname} =req.body;
    
      try {
        const existingCategory = await Cat.findOne({ categoryname });
        if (existingCategory) {
            return res.status(400).json({ error: 'Category name already exists' });
        }
      
        // Attempt to create and save the new category
        const cat = new Cat({ categoryname });
        await cat.save();
        res.status(200).json({ message: 'Category added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
    
 });


 


module.exports= router;