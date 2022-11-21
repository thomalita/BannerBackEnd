const { Class, StudentClass, Student } = require('../models')
const Sequelize = require('sequelize')
const { GetStudentAndClasses } = require('./StudentClassController')

const GetAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll()
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const GetClassById = async (req, res) => {
  try {
    const aClass = await Class.findByPk(req.params.class_id, {
      include: { model: Student, through: StudentClass, as: 'classes' }
    })
    res.send(aClass)
  } catch (error) {
    throw error
  }
}

const CreateClass = async (req, res) => {
  try {
    const newClass = await Class.create({ ...req.body })
    res.send(newClass)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllClasses,
  GetClassById,
  CreateClass
}
