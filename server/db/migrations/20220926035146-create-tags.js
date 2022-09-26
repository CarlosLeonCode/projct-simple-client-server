'use strict';

const { TAG_TABLE, TagSchema } = require('../../models/tag.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TAG_TABLE, TagSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TAG_TABLE);
  }
};
