const { Class } = require('../models')
const Sequelize = require('sequelize')

const GetAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll()
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const getClassById = async (req, res) => {
  try {
    const aClass = await Class.findByPk(req.params.class_id)
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
  getClassById,
  CreateClass
}
