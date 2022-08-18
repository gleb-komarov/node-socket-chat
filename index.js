const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    socket.on('chat-msg', (data) => {
        io.emit('chat-msg', {
            message: data.message,
            name: data.name
        })
    })
})

app.use(express.static(__dirname));

http.listen(3000, () => {
    console.log('Server started');
})  
