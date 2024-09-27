const io = require('socket.io')(3000, {
    cors: {
        origin: "*",
    }
});

const users = {};

io.on('connection', socket => {
    console.log('A user connected: ', name);

    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        console.log(`${name} has joined the chat.`);
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        console.log("Message sent: ", message);
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', () => {
        const name = users[socket.id];
        if (name) {
            console.log(`${name} has left the chat.`);
            socket.broadcast.emit('left', name);
            delete users[socket.id];
        }
    });
});
