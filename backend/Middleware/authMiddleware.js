import jwt from 'jsonwebtoken'


 const authMiddleware = async (req,res,next)=>{

    const {token} = req.headers;
    if(!token){
        res.json({success:false, message:"Not Authorized, try again"});
    }
    try {
        const decode_token = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decode_token.id;
        next();
        
    } catch (error) {
        console.log("Error from authMiddleware:",error);
         res.json({success:false, message: "Error"});
    }
 }

 export default authMiddleware;