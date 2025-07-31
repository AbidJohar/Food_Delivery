import foodModel from "../Models/foodModel.js"
import fs from 'fs'

 // add food items function

 const addFood = async (req,  res)=>{

    const image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
         description: req.body.description,
         price: req.body.price,
         category: req.body.category,
         image: image_filename
    })
    try {
         await food.save();
         res.json({success:true, message: "food is added"});
        } catch (error) {
            console.log("Error from foodController", error);
            res.json({success:false, message: "Error"});
    }
 
 }

 // food list function

 const foodList = async (req, res)=>{

      console.log("foodlist endpoint is  hitting...");
    try {
        
       
         const foods = await foodModel.find({});
       return   res.json({success:true, data:foods});
    } catch (error) {
         res.json({success:false, message:"Error"});
    }
 }

 // Food search query function

 const searchQuery = async (req, res) => {
  console.log("search query endpoint is hitting...");

  try {
    const searchTerm = req.query.search;
    console.log("req search:", searchTerm);

    if (!searchTerm) {
      return res.status(400).json({ success: false, message: "Search query is required" });
    }

    // Using case-insensitive regex for filtering directly in MongoDB
    const filterFoods = await foodModel.find({
      name: { $regex: searchTerm, $options: "i" } // "i" for case-insensitive
    });

    return res.json({ success: true, data: filterFoods });

  } catch (error) {
    console.error("Search error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


 // delete food function

 const removeFood = async (req, res)=>{

    try {
         const food = await foodModel.findById(req.body.id);
         fs.unlink(`uploads/${food.image}`, ()=>{});

          await foodModel.findByIdAndDelete(req.body.id);
          res.json({success:true, message:"removed food successfully"});

    } catch (error) {
        res.json({success:false, message:"error"});
    }
 }

 export {addFood, foodList, removeFood,searchQuery}