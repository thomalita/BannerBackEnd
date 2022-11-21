const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const ClassRouter = require('./ClassRouter')
const UserRouter = require('./UserRouter')
const StudentClassRouter = require('./StudentClassRouter')

Router.use('/student', StudentRouter)
Router.use('/class', ClassRouter)
Router.use('/user', UserRouter)
Router.use('/studentclass', StudentClassRouter)

module.exports = Router
