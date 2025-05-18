const CrudRepository=require("./crud-repository")
const {Airport}=require("../models")
class AirportRepository extends CrudRepository{
 constructor(){
    super(Airport) //super keyword used to call the constructor of the parent class
 }
}

module.exports=AirportRepository;