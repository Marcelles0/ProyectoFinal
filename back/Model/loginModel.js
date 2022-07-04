// email, password, y role

const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        required: true,
        unique: true,
        type: String,
        
    },
    password: {
        required: true,
        type: String,
        
    },
    role: {
        type: Number,
        default: 1,
    },
},
{
    versionKey:false,
});

module.exports = mongoose.model('login',loginSchema);