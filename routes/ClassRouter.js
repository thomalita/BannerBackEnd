const Router = require('express').Router()
const controller = require('../controllers/ClassController')

Router.get('/', controller.GetAllClasses)
Router.post('/', controller.CreateClass)
// Router.put('/class_id', controller.UpdateClass)
// Router.delete('/class_id', controller.DeleteClass)
Router.get('/:class_id', controller.GetClassById)

module.exports = Router
