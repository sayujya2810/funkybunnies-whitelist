const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')
const { db } = require('./models/User');




app.use(express.static('public'))
app.use(express.json())
app.use(require('./routes/auth'))
// app.use(require('./routes/mint'))
app.use(cors)


const database  = process.env.MONGODB_URI


// app.get('/find', async(req,res) => {
    
// })

const getAddresses = (list) => {
    db.collection('users').find({}).toArray((err, result) => {
        if(err){
            alert("Error Ocurred")
        }
        else{ 
            result.map((r) => {
                list.push(r['address'])
            })

            console.log(list)
        }
    })
}


app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})


mongoose.connect( database ,{
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to Mongoose Successfully")
}).catch((err) => {
    console.log(err)
})




app.listen( process.env.PORT || 5000, ()=>{
    // myList = []
    // console.log("before: ", myList)
    // getAddresses(myList)
    // console.log("after: ", myList)
    console.log("Listening to port 5000")
})