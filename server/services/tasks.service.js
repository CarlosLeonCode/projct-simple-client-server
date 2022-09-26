const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class TasksService {
  async create(data){
    const task = models.Task.create(data);
    return task;
  }

  async find(){
    const tasks = await models.Task.findAll({
      include: ['tags']
    });
    return tasks;
  }

  async findOne(id){
    const task = await models.Task.findByPk(id);
    if(!task){
      throw boom.notFound('Product not found');
    }
    return task;
  }

  async update(id, changes){
    const task = await this.findOne(id);
    if(!task){
      throw "Task not found";
    }
    const response = await task.update(changes);
    return response;
  }

  async delete(id){
    const task = await this.findOne(id);
    await task.destroy();
    return { message: 'delete it!', id: id };
  }
}

module.exports = TasksService;
