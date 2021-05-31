const mongoose = require('mongoose');
// SCHEMA
const turtleSchema = new mongoose.Schema({
    name: String,
    role: String,
})

const Turtle = mongoose.model('Turtle', turtleSchema);
module.exports = Turtle; 