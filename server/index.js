const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPORT = 3000

app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error',console.error.bind,'MongoDB connection error:')

app.get('/',(req, res)=> {
    res.send('HELLO WORLD')
})


app.use('/api', movieRouter)

app.listen(apiPORT, () =>console.log(`Server Runnig on PORT ${apiPORT}`))