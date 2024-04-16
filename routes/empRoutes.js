const express = require('express');
const router = express.Router();
const emp = require('../Model/emp');
router.use(express.json());

router.post('/add',async(req,res)=>{
    try {
        const data = req.body;
        await emp(data).save();
        res.send({message:"Data added"})
    } catch (error) {
        console.log(error)
    }
});