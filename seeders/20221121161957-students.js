
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Derek Lewis',
          email: 'derek@lewis.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Thomalita Burbank',
          email: 'thomalita@burbank.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jeremy Harrell',
          email: 'jeremy@harrell.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kathya Castaneda',
          email: 'kathya@castaneda.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
};
