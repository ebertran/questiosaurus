const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizSchema = new Schema({
    user: String,
    title: String,
    questions: [{
        text:  String,
        answers:  [{
            text: String,
            dimension: String,
            value: Number
        }]
    }]
}, 'quizs')

module.exports = mongoose.model('Quiz', QuizSchema)