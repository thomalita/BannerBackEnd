const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const ClassRouter = require('./ClassRouter')
const UserRouter = require('./UserRouter')

Router.use('/student', StudentRouter)
Router.use('/class', ClassRouter)
Router.use('/user', UserRouter)

module.exports = Router