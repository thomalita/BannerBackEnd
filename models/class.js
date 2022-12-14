'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsToMany(models.Student, {
        through: models.StudentClass,
        as: 'classes',
        foreignKey: 'class_id'
      })
    }
  }
  Class.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      grade: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Class',
      tableName: 'classes'
    }
  )
  return Class
}
