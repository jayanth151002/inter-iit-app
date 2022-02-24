const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objSchema = new Schema({
    Course: {
        type: String,
        required: true
    },
    Credits: {
        type: String,
        required: true
    },
    Grade: {
        type: String,
        required: true
    }
})

const gradeSchema = new Schema({
    Rollno: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Program: {
        type: String,
        required: true
    },
    Grades: [objSchema]
})

module.exports = mongoose.model('Students', gradeSchema)