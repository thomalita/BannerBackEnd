const { StudentClass } = require('../models')

const AssignToClass = async (req, res) => {
  try {
    const assignClass = await StudentClass.create({
      student_id: studentId,
      class_id: classId,
      grade: grade
    })
    res.send(assignClass)
  } catch (error) {
    throw error
  }
}

const GetStudentAndClasses = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  AssignToClass,
  GetStudentAndClasses
}
