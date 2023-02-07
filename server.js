//express
var express = require('express');
//create our app
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('location',(location)=>{
        console.log(location);
        socket.broadcast.emit('sharedLocation',location);
    })
});


server.listen(PORT, () => {
    console.log('Map server & socketIO listening on port' + PORT);
});