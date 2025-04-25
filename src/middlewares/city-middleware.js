 const {StatusCodes}=require("http-status-codes")
 const {errorResponse}=require("../utils/common")
const appError = require("../utils/error/app-error")
 function validateCreateCity(req,res,next){

        if(!req.body.name ||  req.body.name.trim() === ""){
            errorResponse.message="something went wrong while creating city"
            errorResponse.error=new appError(" city name is not found in the incoming request or the format is incorrect",StatusCodes.BAD_REQUEST)
            return res.json(errorResponse);
}
                  next();
}
module.exports={
    validateCreateCity
}