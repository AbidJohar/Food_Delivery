import userModel from '../Models/userModel.js'


 // add to cart function

 const addToCart = async (req,res)=>{
         try {
            let userData = await userModel.findOne({_id:req.body.userId}); // findbyId(req.body.userId);
            let cartData = await userData.cartData;
             console.log("cartData:",cartData);
            if(!cartData[req.body.itemId]){
                cartData[req.body.itemId] = 1;
            }
            else{
                cartData[req.body.itemId] += 1;

            }
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true, message:"added to cart"});
        } catch (error) {
            console.log("Error from add to cart:: cartController",error);
            res.json({success:true, message:"added to cart"});
            
         }
        }
        // remove from cart function
        
 const removeFromCart = async (req,res)=>{

    try {
         const userData = await userModel.findById(req.body.userId);
             console.log("userData",userData);
             const cartData = await userData.cartData;
             if(cartData[req.body.itemId] > 0){
             console.log("user cart data itemid", req.body);
            cartData[req.body.itemId] -= 1;
         }
         await userModel.findByIdAndUpdate(req.body.userId, {cartData});
           res.json({success: true, message: "remove item from cart"});
           
        } catch (error) {
            console.log("Error from :: remove From cart:",error);
            
            res.json({success:false, message: "Error"});
    }

 }
 // fetch all  cart data

 const getData = async (req,res)=>{

    try {
        const userData = await userModel.findById(req.body.userId);
        const cartData = userData.cartData;

        res.json({success:true, cartData});
        
    } catch (error) {
        console.log("Error from :: get Cart data:",error);
            
        res.json({success:false, message: "Error"});
    }

 }

 export {addToCart,removeFromCart,getData};
