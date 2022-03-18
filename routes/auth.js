const express = require('express')
const router = express.Router()

const User = require('../models/User')




router.post('/adduser', (req,res) => {
    const {email, address} = req.body

    if(!email || !address){
        return res.status(422).json({error:"Please Enter all the creds"})
    }

    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({error:"User already Whitelisted"})
        }

        const user = new User({address:address, email:email})

        user.save().then(() => {
            res.status(201).json({message:"User Successfully Whitelisted"})
        }).catch((err) => {
            res.status(500).json({error:"Failed to whitelist"})
        })

    })
    .catch((err) => {
        console.log(err);
    })

    
    // console.log({email, address})
    // res.json({message: {email, address}})
    // res.send("register page")
})

module.exports = router;