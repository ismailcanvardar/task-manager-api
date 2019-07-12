const express = require('express')
require('./db/mongoose.js')

// Collection models' routers
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
// Routers of models
app.use(userRouter)
app.use(taskRouter)

module.exports = app