const { Model, DataTypes, Sequelize } = require('sequelize');

const { TAG_TABLE } = require('./tag.model');
const { TASK_TABLE } = require('./task.model');

const TASK_MANY_TAGS_TABLE = 'task_many_tags';

TaskManyTagsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  taskId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'task_id',
    references: {
      model: TASK_TABLE,
      key: 'id'
    }
  },
  tagId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'tag_id',
    references: {
      model: TAG_TABLE,
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}

class TaskManyTag extends Model{
  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_MANY_TAGS_TABLE,
      modelName: 'TaskManyTag',
      timestamps: false
    }
  }
}

module.exports = { TASK_MANY_TAGS_TABLE, TaskManyTagsSchema, TaskManyTag };
