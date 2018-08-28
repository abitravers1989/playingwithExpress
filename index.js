const express = require('express');



const app = express();

//console.log('listeners ' + app.listeners())
console.log(app.listeners[0])
console.log('post ' + app.post[0])
//console.log('1st emit ' + app.emit)


const myEventHandler = () => {
    console.log("handler called")
}

app.on('alerter', myEventHandler);
//console.log('2nd emit ' + app.emit)
app.emit('alerter');
//console.log('3rd emit ' + app.emit)

//app.set('title', 'my site')
console.log(app.get('title'))
