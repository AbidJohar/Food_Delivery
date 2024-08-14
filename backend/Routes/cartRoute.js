import express from 'express'
import authMiddleware from '../Middleware/authMiddleware.js'
import { addToCart,removeFromCart,getData } from '../Controllers/cartController.js'

 const cartRouter = express.Router();


 cartRouter.post("/add", authMiddleware, addToCart);
 cartRouter.post("/remove", authMiddleware, removeFromCart);
 cartRouter.post("/get", authMiddleware, getData);

 export default cartRouter;