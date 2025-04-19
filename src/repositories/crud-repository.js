const { where } = require('sequelize');
const { Logger } = require('../config')
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            const response= await this.model.create(data)
            return response;
        }catch(error){
            Logger.error("Error in create method in crud-repository", error)
            throw error;
        }
    }
    async delete(data){
        try{
            const response= await this.model.destroy({
                where:{
                    id:data
                }
            }) 
            return response;
        }catch(error){
            Logger.error("Error in delete method in crud-repository", error)
            throw error;
        }
    }
    async get(data){
        try{
            const response= await this.model.findByPk(data)
            return response;
        }catch(error){
            Logger.error("Error in get method in crud-repository", error)
            throw error;
        }
    }
    async getAll(data){
        try{
            const response= await this.model.findAll(data)
            return response;
        }catch(error){
            Logger.error("Error in getAll method in crud-repository", error)
            throw error;
        }
    }
    async update(id,data){
        try{
            const response= await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response;
        }catch(error){
            Logger.error("Error in update method in crud-repository", error)
            throw error;
        }
    }
}

module.exports=CrudRepository;