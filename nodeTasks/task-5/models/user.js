const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        max:32,
        required: true,
    },
    age:{
        type:Number,
        min: 1,
        max: 100,
        required:true
    },
    phone_no:{
        type:Number,
        required:true,
        validate:{
            validator:function(val){
                return  /^\d{10}$/.test(val);
            },
            message:"phone number should be 10 digit numeric val"
        }
    }
})

UserSchema.pre('save', function (next) {
    this.name = this.name.toUpperCase();
    next();
  });

UserSchema.post('save', function () {
    console.log('User saved successfully!');
  });


const User = mongoose.model('User',UserSchema)

module.exports = User;