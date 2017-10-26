'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentResourceSchema = new Schema({
    lastname: {
        type: String,
        required: 'Lastname is required!'
    },
    midname: {
        type: String
    },
    firstname: {
        type: String,
        required: 'Firstname is required!'
    },
    sex: {
        type: String,
        enum: ['Male', 'Female']
    },
    regno: {
        type: String,
        unique: true,
        required: 'Registration number is required!'
    },
    image: {
        type: String
    },
    dob: {
        type: String,
        required: 'Date of birth is required!'
    },
    class: {
        type: String,
            required: 'Class is required!'
    }
});

module.exports = mongoose.model('StudentResource', TaskSchema);