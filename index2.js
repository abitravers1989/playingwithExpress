const express = require('express');;
const fs = require('fs');
const requestTime = require('./middleware/my-middleware');
const { v1 } = require('uuid');

const app = express();

app.get('/', (req, res, next) => {
    readingFile(res, next)
})

const readingFile = (res, next) => {
    fs.readFile('hello.md', (error, data) => {
        if (error) {
            next(error)
        }
        else {
            res.send(data.toString());
        }
        console.log(next())
    })
}

// app.post('/', (req, res) => {
//     res.send('got post request')
//     res.status(500).json({ error: 'message' });
// })


app.get('/posts', (req, res, next) => {
    res.status(200).json({ title: 'first post title', content: 'first post', date: Date.now(), id: v1() });
})

module.exports = app;

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }

const port = 3000
app.listen(port, printPort(port))
