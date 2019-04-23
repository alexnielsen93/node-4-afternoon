const express = require ('express')
const session = require ('express-session')
const checkForSession = require('./middlewares/checkForSession')
const swagController = require('./controllers/swagController')
require('dotenv').config()

let { SERVER_PORT, SESSION_SECRET} = process.env

const app = express()
app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)

app.use(checkForSession)
app.get('/api/swag', swagController)

app.listen(SERVER_PORT, ()=>{

  console.log(`listening at port ${SERVER_PORT}`)
})