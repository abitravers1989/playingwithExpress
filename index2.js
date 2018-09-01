const express = require('express');
const http = require('http');
const fs = require('fs');
const requestTime = require('./middleware/my-middleware');
const csv = require('csv-parser')

const app = express();

console.log(app.get('/'))

app.get('/', (req, res, next) => {
    readingFile(res, next)
})

const readingFile = function (res, next) {
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

app.post('/', function (req, res) {
    res.send('got post request')
})

app.get('/new', (req, res, next) => {
    const inputFile = 'transactions.csv';                                                                                                                                                                                                                                                                                                                                                                 ';
    var parser = parse({delimiter: ','}, function (err, data){
        async.eachSeries(data, function(line, callback) {
            res.send(line).then(function(){
                callback();
            })
        })
    })
    fs.createReadStream(inputFile).pipe(parser);
})


//write to a file. await this.. then read it 

// app.use(requestTime)

// app.get('/time', function (req, res) {
//         let responseText = 'Time post! <br>'
//         responseText += '<small> requested at:' + req.requestTime + '<small>'
//         res.send(responseText)
// })

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }

const port = 3000
app.listen(port, printPort(port))
