const { where } = require("sequelize");
const { Logger } = require("../config");
const appError = require("../utils/error/app-error");
const { StatusCodes } = require("http-status-codes");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }
  async delete(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return response;
  }
  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response){
      throw new appError("The searched object is not found",StatusCodes.NOT_FOUND);
    }
    return response;
  }
  async getAll(data) {
    const response = await this.model.findAll(data);
    return response;
  }
  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;
