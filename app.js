// Task1: initiate app and run server at 3000
const express = require('express');
const morgan = require('morgan');
const emp = require('./Model/emp');
const app = express();
const path=require('path');
const empmodel = require('./Model/emp');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
require('./DB/connection')

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

app.use(morgan('dev'));









//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',async(req,res)=>{
    try {
        full_list = await empmodel.find()
        res.send(full_list)
    } catch (error) {
        console.log(error)
    }
});


//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        specified_data = await empmodel.findById(id)
        if (specified_data) {
            res.send(specified_data)
        } else {
            res.send({message:"Item not Founded"})
        }
    } catch (error) {
        console.log(error)
    }
});


//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.use(express.json());

app.post('/api/employeelist',async(req,res)=>{
    try {
        const data = req.body;
        await emp(data).save();
        res.send({message:"Data added"})
    } catch (error) {
        console.log(error)
    }
});




//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete('/api/employeelist/:id',async(req,res)=>{
    const id = req.params.id
    try {
        await empmodel.findByIdAndDelete(id)
        res.send({message:"Item deleted"})
    } catch (error) {
        console.log(error)
    }
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist',async(req,res)=>{
    const id = req.body._id
    try {
        const final = await empmodel.findByIdAndUpdate(id,req.body)
        final.save();
        res.send("updated")
    } catch (error) {
        console.log(error)
    }
})


app.listen(3000,()=>{
    console.log("running in 3000")
})
//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



