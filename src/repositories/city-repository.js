const CrudRepository=require("./crud-repository")
const {city}=require("../models")
class CityRepository extends CrudRepository{
 constructor(){
    super(city) //super keyword used to call the constructor of the parent class
 }
}

module.exports=CityRepository;