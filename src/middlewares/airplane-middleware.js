 const {StatusCodes}=require("http-status-codes")
 const {errorResponse}=require("../utils/common")
const appError = require("../utils/error/app-error")
 function validateCreateAirplane(req,res,next){

        if(!req.body.modelNumber){
            errorResponse.message="something went wrong while creating airplane"
            errorResponse.error=new appError("modelNumber is not found in the incoming request or the format is incorrect",StatusCodes.BAD_REQUEST)
            return res.json(errorResponse);
}
                  next();
}
module.exports={
    validateCreateAirplane
}