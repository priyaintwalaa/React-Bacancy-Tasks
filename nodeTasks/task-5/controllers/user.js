const User = require('../models/user')

exports.addUser=async (req,res)=>{
    try {
     const {name, age, phone_no} = req.body;

    await User.create({
       name,age,phone_no
    })

    res.send({message:"User created succesfully"})
    } catch (error) {
        res.send({error})
    }

}