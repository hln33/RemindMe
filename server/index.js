const express = require('express')

const app = express()

app.get('/api', (req, res) => {
    console.log("get working")
})

app.post('/api', (req, res) => {
    console.log("post working")
})

app.listen(3001, () => console.log('server started on port 3001'))