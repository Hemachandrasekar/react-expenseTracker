const express = require('express')
const cors =require('cors')
const { db } = require('./db')
const {readdirSync} = require('fs')
const app=express()

require('dotenv').config()

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(cors())


//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

const server = async() => {
await db()
app.listen(PORT,() => {
 console.log("Listening the port:",PORT)
})
}

server()