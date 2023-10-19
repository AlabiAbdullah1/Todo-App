const express= require('express')
const todoController= require('./controller/TodoController')
const path= require('path')
const bodyParser = require('body-parser') // I wanted this in app.js



const app= express()
app.use(bodyParser.json({})) // in app.js
// Set view template
app.set('view engine', 'ejs')
// Middleware
app.use(express.json({extended:true}))  // not necessary does same work as line 9 above (choose the one you want)
app.use(express.static('./public'))

// Fire controller:
todoController(app)



// Listen to port
app.listen(3000, ()=>{
    console.log('Listening to port 3000')
})