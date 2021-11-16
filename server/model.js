const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
    text: String,
    date: Date,
    phone: String
})
const Reminder = mongoose.model('Reminder', reminderSchema)

module.exports = Reminder
