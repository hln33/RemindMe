const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
    text: String,
    date: Date,
    phone: String
})
const Reminder = module.exports = mongoose.model('Reminder', reminderSchema)
