const express = require('express');
const http = require('http');
const fs = require('fs');


const app = express();

console.log(app.get('/'))

app.get('/', function (req, response) {
    console.log(req)
    response.send('hello world')
})

app.get('/hi', (req, res) => {
    readingFile(res)
})

const readingFile = function (res) {
    fs.readFile('hello.md', (error, data) => {
        if (error) throw error;
        res.send(data.toString());
    })
}

// app.get('/hi', function (req, res) {
//     fs.readFile('hello.md', (error, data) => {
//         if (error) throw error;
//         res.send(data.toString());
//     })
// })


app.listen(3000)

