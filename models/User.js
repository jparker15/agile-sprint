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
        unique:true,
        minlength:3,
        maxlength:20
    },
    password:{
        type:String,
        required: true,
        minlength: 7,
        maxlength:100
    },
    admin:{
        isAdmin:{
            type:Boolean,
            default:false
        }
    }
})

module.exports = mongoose.model("User", User)