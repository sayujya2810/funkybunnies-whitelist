const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()
const path = require('path')
// const favicon = require("serve-favicon")


const userModel = require("./models/User")

const app = express()
const PORT = process.env.PORT || 5000

const db = 'mongodb+srv://admin:admin@cluster0.5ulko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const db = 'mongodb+srv://admin:admin1234@cluster0.dj88z.mongodb.net/funkybunnies?retryWrites=true&w=majority' //original
// const db = process.env.MONGODB_URI




app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




// Step 2
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// app.use("/", require("./routes/routeAddress"))

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.post("/adduser", async (req,res) => {

    const userAddress = req.body.address
    const userEmail = req.body.email
    // const userPhno = req.body.phno

    userModel.findOne({address:userAddress})
        .then((userExist) => {
            if(userExist){
                return res.status(422).json("Address Already Whitelisted")
            }

            const newUser = new userModel({
                address:userAddress,
                email: userEmail,
            })
            newUser.save()
            res.send("Inserted")
        })

    
    // console.log("Inserted data")
})
// app.get("/read", async (req,res) => {
//     userModel.find()
//     .then((foundUser) => {
//         res.json(foundUser)
//         console.log(foundUser)
//         })
// })
app.get("/read", async (req,res) => {
    userModel.find({}, (err, result) => {
        if(err){
            res.send(err)
            // console.log(err)
        }
        else{
            res.send(result)
            // console.log("resuce",result)
        }
    })
})

    app.listen(5000, ()=>{
        console.log(`Connected to ${5000}`)
    })