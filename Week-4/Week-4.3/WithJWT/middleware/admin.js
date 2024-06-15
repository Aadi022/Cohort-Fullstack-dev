const jwt=require("jsonwebtoken");
const secret=require("../index");

function adminMiddleware(req,res,next){
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    try{
        const decodedval=jwt.verify(jwtToken,secret);
        next();
    }
    catch{
        res.status(403).json({
            msg:"You are not authenticated"
        });
    }
}

module.exports=adminMiddleware;