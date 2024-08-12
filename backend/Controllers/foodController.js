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

    try {
         const foods = await foodModel.find({});
         res.json({success:true, data:foods});
    } catch (error) {
         res.json({success:false, message:"Error"});
    }
 }

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

 export {addFood, foodList, removeFood}