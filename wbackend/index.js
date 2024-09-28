const { Server } = require('socket.io');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://HARSHAD:HARSHAD@cluster0.yzv2blz.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});


const Message = mongoose.model('Message', messageSchema);


const io = new Server(3000, {
    cors: {
        origin: "*",
    }
});


const users = {};


io.on('connection', (socket) => {
    

    socket.on('new-user-joined', (name) => {
        users[socket.id] = name;
        console.log(`${name} has joined the chat.`);
        socket.broadcast.emit('user-joined', name);

        Message.find().then(messages => {
            socket.emit('previous-messages', messages);
        }).catch(err => {
            console.error("Error fetching previous messages:", err);
        });
    });


    socket.on('send', (message) => {
        const userName = users[socket.id];
        if (userName) {
            console.log("Message sent from:", userName, "Message:", message);
            const newMessage = new Message({ name: userName, message });

            newMessage.save()
                .then(() => {
                    socket.broadcast.emit('receive', { message: message, name: userName });
                })
                .catch(err => {
                    console.error("Error saving message:", err);
                });
        } else {
            console.warn("User not found for socket ID:", socket.id);
        }
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
