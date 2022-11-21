const { StudentClass, Student, Class } = require('../models')

const AssignToClass = async (req, res) => {
  try {
    const assignClass = await StudentClass.create({ ...req.body })
    res.send(assignClass)
  } catch (error) {
    throw error
  }
}

const GetStudentAndClasses = async (req, res) => {
  try {
    const studentAndClass = await Student.findByPk(req.params.student_id, {
      include: { model: Class, through: StudentClass, as: 'students' }
    })
    res.send(studentAndClass)
  } catch (error) {
    throw error
  }
}

module.exports = {
  AssignToClass,
  GetStudentAndClasses
}
