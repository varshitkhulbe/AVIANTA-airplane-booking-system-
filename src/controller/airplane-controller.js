const {AirplaneService} = require("../services")
console.log(AirplaneService)
const {StatusCodes} = require("http-status-codes")
const {errorResponse,successResponse}=require("../utils/common")
const e = require("express")
async function createAirplane(req,res){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        })
        successResponse.data=airplane;
        return res.status(StatusCodes.CREATED)
        .json(successResponse)
    }catch(error){
      console.log(error); 
      errorResponse.message="something went wrong while creating airplane"
      errorResponse.error=error
      return res.status(error.StatusCode)
      .json(errorResponse)
    }
}

module.exports={createAirplane}