const { Tag, TagSchema } = require('./tag.model');
const { Task, TaskSchema } = require('./task.model')
const { TaskManyTag, TaskManyTagsSchema } = require('./task_many_tags.model')

function setupModels(sequelize){
  Tag.init(TagSchema, Tag.config(sequelize));
  Task.init(TaskSchema, Task.config(sequelize));
  TaskManyTag.init(TaskManyTagsSchema, TaskManyTag.config(sequelize));

  Task.associate(sequelize.models);
}

module.exports = setupModels;
