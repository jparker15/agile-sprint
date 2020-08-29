//required packages
const mongoose = require("mongoose");
const validator = require("validator");
//instance of mongoose schema class 

const User = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true,

    }
})