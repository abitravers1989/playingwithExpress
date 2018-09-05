const express = require('express');
const http = require('http');
const fs = require('fs');
const requestTime = require('./middleware/my-middleware');

const app = express();

console.log(app.get('/'))

app.get('/', function (req, response) {
    //console.log(req.cookies)
    response.send('hello world')
    //response.writeHead(statusCode: status.valueOf)
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

app.get('/errorHandling', (req, res, next) => {
    fs.readFile('non-existant-file', (error, data) => {
        if (error) {
            //pass this error to express
            next(error)
        }
        else {
            res.send(data)
        }
    })
})

app.get('/new', (req, res, next) => {
    let myFirstPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("sucess!")
        }, 250)
    })

    myFirstPromise.then((successMessage) => {
        console.log("Yay " + successMessage)
    })
    res.send("working?")
    next()
    console.log(next())
})

app.use(requestTime)

app.get('/time', function (req, res) {
    let responseText = 'Time post! <br>'
    responseText += '<small> requested at:' + req.requestTime + '<small>'
    res.send(responseText)
})

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }

const port = 3000
app.listen(port, printPort(port))

