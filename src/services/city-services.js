const {CityRepository}=require("../repositories")
const appError = require("../utils/error/app-error");
const {StatusCodes}=require("http-status-codes")

const cityrepository=new CityRepository()

async function createCity(data){
   try{
    const city = await cityrepository.create(data);
    return city;
   }catch(error){
    console.log("error in creating city",error)
    if(error.name==="SequelizeValidationError" || error.name==="SequelizeUniqueConstraintError"){
        let explanation=[]
        error.errors.forEach((err)=>{
            explanation.push(err.message)
        })
        console.log("Explanation is :",explanation)
        throw new appError(explanation,StatusCodes.BAD_REQUEST)
    }
    throw new appError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}

module.exports={
    createCity
}