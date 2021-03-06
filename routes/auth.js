const express = require('express')
const router = express.Router()
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const User = require('../models/User');
// const OgUser = require('../models/OgUser')
const { db } = require('../models/User');
var fs = require('fs')

router.get("/read", async (req,res) => {
    User.find({}, (err, result) => {
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

router.post('/adduser', async (req,res) => {


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
        console.log("err in whitelisting")
    })

})




module.exports = router;