const Router = require('express').Router()
const controller = require('../controllers/StudentClassController')

Router.get('/:id', controller.GetStudentAndClasses)
Router.post('/assign', controller.AssignToClass)

module.exports = Router
