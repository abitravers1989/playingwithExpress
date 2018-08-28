const express = require('express');



const app = express();

//console.log('listeners ' + app.listeners())
console.log(app.listeners())
console.log('post ' + app.post[0])
console.log('1st emit ' + app.emit[0])


const myEventHandler = () => {
    console.log("handler called")
}

app.on('alerter', myEventHandler);
console.log('2nd emit ' + app.emit[0])
app.emit('alerter');

