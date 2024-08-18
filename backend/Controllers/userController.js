import userModel from '../Models/userModel.js';
import jwt from 'jsonwebtoken'
import bcrypt, { compareSync } from 'bcrypt'
import validator from 'validator';



 // login user function
  const loginUser = async (req, res)=>{
       const {email, password} = req.body;
       try {
        const user = await userModel.findOne({email});
       if(!user){
        return res.json({success:true, message: "User doesn't exist"});
       }
       console.log("before encrypt everything ok");
       const isMatch = await bcrypt.compare(password, user.password);
       if(!isMatch){
        return res.json({success:false, message:"Invalid credientails"})
       }
       const token = createToken(user._id);
       res.json({success:true, token,message:"Successfully login"});
       } catch (error) {
          console.log("Error from loginuser:",error);
          return res.json({success:false, message:"Error"});
          
       }
       
      
}
 // creating Token function
 const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET);
 }

// register user function
const registerUser = async (req, res)=>{
      const {name, email, password} = req.body;
      try {
         // checking is user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: "User already exists"});
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"});
        }
        // checking strong password
        if(password.length< 8){
            return res.json({success:false, message: "Please enter a strong password"});
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // creating new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        });
        const user =  await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token, message:"Account created Successfully"});
        
      } catch (error) {
         console.log("Error from register user:",error);
         res.json({success:false, message:"Error"});
      }

  }

  export {loginUser,registerUser};