const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number

});

const empmodel = mongoose.model('emp',schema);
module.exports = empmodel;