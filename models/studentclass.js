'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StudentClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentClass.init(
    {
      student_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id'
        }
      },
      class_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'classes',
          key: 'id'
        }
      },
      grade: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'StudentClass',
      tableName: 'student_classes'
    }
  )
  return StudentClass
}
