const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },  

    email: { 
        type: String,
        unique: true,
        required: true,
        max: 255, 
        min: 6 
    },

    password: { 
        type: String,
        required: true,
        min: 4,
    },

});

module.exports = mongoose.model('User', userSchema);