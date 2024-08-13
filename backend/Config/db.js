import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/food-delivery', {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));
}
 
