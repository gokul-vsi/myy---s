require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongodb = require('mongoose')
const disRouter = require('./router/disRoute')
mongodb.connect(process.env.MONGODB_URL).then(()=>console.log("DB is Connected"))


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/display',disRouter)


app.get('/',(req,res)=>{
    res.send("Welcome to Expense Tracker")
})



app.listen(process.env.PORT,()=>{
    console.log("Server is Running  Successfully")
})