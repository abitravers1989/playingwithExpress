const express = require('express');
const http = require('http');
const fs = require('fs');


const app = express();

app.set('title', 'my site')
console.log(app.get('title'))

console.log(app.get('/'))

app.get('/', function (req, response) {
    console.log(response)
    response.send('hello world')
})


app.set('/hi', 'my site')
app.get('/hi', function (req, res) {
    fs.readFile('hello.md', (error, data) => {
        if (error) throw error;
        response.send(data.toString());
    })
})

