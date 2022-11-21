const middleware = require('../middleware')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let passwordDigest = await middleware.hashPassword('1234')
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'Admin',
          passwordDigest,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
