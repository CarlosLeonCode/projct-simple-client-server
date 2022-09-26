'use strict';

const { TASK_MANY_TAGS_TABLE, TaskManyTagsSchema } = require('../../models/task_many_tags.model')


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TASK_MANY_TAGS_TABLE, TaskManyTagsSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TASK_MANY_TAGS_TABLE);
  }
};
