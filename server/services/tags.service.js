const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class TagsService {
  async create(data){
    const tag = await models.Tag.create(data);
    return tag;
  }

  async find(){
    const tags = await models.Tag.findAll();
    return tags;
  }

  async findOne(id){
    const tag = await models.Tag.findByPk(id);
    if(!id){
      throw boom.notFound('Product not found');
    }
    return tag;
  }

  async update(id, changes){
    const tag = await this.findOne(id);
    await tag.update(changes)
    return tag;
  }

  async delete(id){
    const tag = await this.findOne(id);
    tag.destroy();
    return { message: 'delete it!', id: id }
  }
}

module.exports = TagsService;
