const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const UserSchema = require("./models/User")
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json())
app.use(require('./routes/auth'))
app.use(cors)


const db = process.env.MONGODB_URI

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

mongoose.connect(db,{
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to Mongoose Successfully")
}).catch((err) => {
    console.log(err)
})




app.listen( process.env.PORT || 5000, ()=>{
    console.log("Listening to port 3001")
})