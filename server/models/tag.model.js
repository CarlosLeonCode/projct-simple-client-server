const { Model, DataTypes, Sequelize } = require('sequelize');

const TAG_TABLE = 'tags';

const TagSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  color: {
    allowNull: true,
    type: DataTypes.STRING,
    defaultValue: '#6bc8dd'
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

class Tag extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: TAG_TABLE,
      modelName: 'Tag'
    }
  }
}

module.exports = { TAG_TABLE, TagSchema, Tag };
