const mongoose= require('mongoose');
const database= require('../config/db');
const {Schema}=mongoose;

const userSchema= new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true,

    },
    password:{
        type: String,
        required: true,


    }
});

const userModel =database.model('user',userSchema);

module.exports =userModel;