const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class TaskManyTagsService {
  async findOne(id){
    const task_tag = await models.TaskManyTag.findByPk(id);
    if(!task_tag){
      throw boom.notFound('Task Tag not found');
    }
    return task_tag;
  }

  async create(data){
    const task_tag = await models.TaskManyTag.create(data);
    return task_tag;
  }

  async delete(id){
    const task_tag = await this.findOne(id);
    await task_tag.destroy();
    return { message: 'delete it!', id: id }
  }
}

module.exports = TaskManyTagsService;
