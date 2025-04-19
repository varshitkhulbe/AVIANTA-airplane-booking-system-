const CrudRepository=require("./crud-repository")
const {Airplane}=require("../models")
class AirplaneRepository extends CrudRepository{
 constructor(){
    super(Airplane) //super keyword used to call the constructor of the parent class
 }
}

module.exports=AirplaneRepository;