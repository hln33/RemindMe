const mongoose = require('mongoose')
const express = require('express')

const reminderSchema = new mongoose.Schema({
    text: String,
    date: Date,
    phone: String
})
const Reminder = mongoose.model('Reminder', reminderSchema)

const app = express()

app.get('/api', (req, res) => {
    console.log("get working")
})

app.post('/api', (req, res) => {
    const newReminder = new Reminder({
        text: req.body.text,
        date: req.body.date,
    })
    console.log("post working")
})

app.listen(3001, () => console.log('server started on port 3001'))