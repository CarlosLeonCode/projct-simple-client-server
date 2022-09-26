const { Model, DataTypes, Sequelize } = require('sequelize');

const TASK_TABLE = 'tasks';
const TASK_STATUSES = ['pending', 'doing', 'done']

const TaskSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM(TASK_STATUSES),
    defaultValue: 'pending'
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

class Task extends Model {
  static associate(models) {
    this.belongsToMany(models.Tag, {
      as: 'tags',
      through: models.TaskManyTag,
      foreignKey: 'taskId',
      otherKey: 'tagId'
    });
  }

  static config(sequelize) {
    return{
      sequelize,
      tableName: TASK_TABLE,
      modelName: 'Task'
    }
  }
}

module.exports = { TASK_TABLE, TaskSchema, Task };
