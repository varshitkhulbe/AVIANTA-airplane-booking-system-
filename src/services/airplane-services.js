const { StatusCodes } = require("http-status-codes");
const {AirplaneRepository} = require("../repositories");
const appError=require("../utils/error/app-error")
const airplanerepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanerepository.create(data);
    return airplane;
  } catch (error) {
    console.log("Error in creating airplane", error.errors);
    if(error.name==="SequelizeValidationError"){
      let explanation=[];
      error.errors.forEach((err)=>{
        explanation.push(err.message); 
      })
      console.log("EXPLANATION IS:",explanation);
      throw new appError(explanation,StatusCodes.BAD_REQUEST)
    }
    throw new appError("Cannot create a new airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
 
module.exports={
    createAirplane
}
