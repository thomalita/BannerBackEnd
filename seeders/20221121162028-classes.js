'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'classes',
      [
        {
          name: 'Intro to Computer Science',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Intro to Outer Space',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Intro to UX',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Intro to SEI',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Intro to Music',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('classes', null, {})
  }
};
