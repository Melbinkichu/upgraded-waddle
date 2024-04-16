const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://melbin_kichu:Melbin@cluster0.wsqd82l.mongodb.net/sampleN?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to db")
})
.catch((err)=>{
    console.log(err)
})