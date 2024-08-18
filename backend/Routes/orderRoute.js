import express from 'express'
import authMiddleware from '../Middleware/authMiddleware.js';
import { listOrders, myOrders, orderStatus, placeOrder,verifyOrder } from '../Controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/myorders",authMiddleware,myOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status", orderStatus);

export default orderRouter 