const Router = require('express').Router()
const controller = require('../controllersclassController')

Router.get('/', controller.GetAllClass)
Router.post('/', controller.CreateClass)
Router.put('/:class_id', controller.UpdateClass)
Router.delete('/:class_id', controller.DeleteClass)
Router.get('/:class_id', controller.getClassById)



module.exports = Router