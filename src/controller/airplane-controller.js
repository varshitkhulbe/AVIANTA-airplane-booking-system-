const {AirplaneService} = require("../services")
console.log(AirplaneService)
const {StatusCodes} = require("http-status-codes")
const {errorResponse,successResponse}=require("../utils/common")
const e = require("express")
const { success } = require("../utils/common/error-response")
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

async function getAirplanes(req,res){
    try{
      const airplanes=await AirplaneService.getAirplanes();
      successResponse.data=airplanes;
      return res.status(StatusCodes.OK)
      .json(successResponse)
    }catch(error){
        console.log(error); 
      errorResponse.message="something went wrong while fetching data from airplanes"
      errorResponse.error=error
      return res.status(error.StatusCode)
      .json(errorResponse)
    }
}
module.exports={createAirplane,getAirplanes}