const User = require("../models/User");
const validator = require("validator");

module.exports = async (req,res,next) =>{
    
    const email = req.body.email,
        pass = req.body.password,
        username = req.body.username,
        failedValue = [];

    if (!validator.isEmail(email)){
        failedValue.push({
            key:"email",
            message: "Valid Email is Required"
        })
    }

    const emailExist = await User.findOne({email: email}) != null //expected boolean 

    
    
    next()
}
