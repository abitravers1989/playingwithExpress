const express = require('express');;
const fs = require('fs');
const requestTime = require('./middleware/my-middleware');
const { v1 } = require('uuid');
const bodyParser = require('body-parser');
const _ = require('lodash');

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


app.get('/posts', (req, res, next) => {
    res.status(200).json({ title: 'first post title', content: 'first post', date: Date.now(), id: v1() });
})

//get1byID

//validate middleware. json etc
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/post', (req, res) => {
    //res.status(200);
    //if is valid post work 

    // if (req.body.title == typeof String) {
    //     res.status(400)
    //     console.log("in here")
    console.log(req.body);
    res.send(`Post successful you can read it here: /{post.ID}`).status(200)
})

module.exports = app;

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }

const port = 3000
app.listen(port, printPort(port))
