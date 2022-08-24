const express = require('express')

const app = express()
app.use(express.json())

const appRouter = require('./modules/index.js')
app.use(appRouter)



app.listen(process.env.PORT||5555,() =>console.log('server run'))