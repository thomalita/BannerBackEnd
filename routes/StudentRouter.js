const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.get('/', controller.GetAllStudents)
Router.post('/', controller.CreateStudent)
Router.put('/:student_id', controller.UpdateStudent)
Router.delete('/:student_id', controller.DeleteStudent)
Router.get('/:student_id', controller.getStudentsById)



module.exports = Router