'use strict';

const { TaskSchema, TASK_TABLE } = require('../../models/task.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TASK_TABLE, TaskSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TASK_TABLE);
  }
};
