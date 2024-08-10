import express from 'express'
import cors from 'cors'
import { connectDB } from './Config/db.js';


// app configuration
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

//DB connection
 connectDB();

app.get('/', (req,res)=>{
    res.send("API is running");
})

app.listen(port, ()=>{
    if(connectDB()){
        console.log("db is also running");
    }
    console.log(`Server is running on port ${port}`);
})