const mongoose = require('mongoose')
const Reminder = require('./model')
const express = require('express')

mongoose.connect('mongodb://localhost/test')
let db = mongoose.connection

db.once('open', () => console.log('Connected to MongoDb'))
db.on('error', err => console.log(err))

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