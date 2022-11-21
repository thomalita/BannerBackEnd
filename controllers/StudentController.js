const { Student } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id)
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const newStudent = await Student.create({ ...req.body })
    res.send(newStudent)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetStudentById,
  CreateStudent
}
