const {CityService}=require("../services")
const {StatusCodes}=require("http-status-codes")
const {successResponse,errorResponse}=require("../utils/common")

async function createCity(req,res){
    try{
        const city=await CityService.createCity({
            name:req.body.name
        });
        successResponse.data=city
        return res.status(StatusCodes.CREATED).json(successResponse)
    }catch(error){
        console.log(error)
        errorResponse.message="something went wrong while creating city"
        errorResponse.error=error
        return res.status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

async function deleteCity(req,res){
    try{
        const response= await CityService.deleteCity(req.params.id)
        successResponse.data=response
        successResponse.message="City deleted successfully"
        return res.status(StatusCodes.OK).json(successResponse)
    }catch(error){
        console.log(error)
        errorResponse.message="something went wrong while deleting city"
        errorResponse.error=error
        return res.status(error.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

module.exports={
    createCity,
    deleteCity
}