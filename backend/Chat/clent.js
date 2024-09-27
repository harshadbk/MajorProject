const socket = io('http://localhost:3000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
var audio = new Audio('mp3ring.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message', position);
    messageContainer.append(messageElement); 
    messageContainer.scrollTop = messageContainer.scrollHeight;
    if(position=='left'){
    audio.play();
    }
};

const name = prompt("Enter Your Name To Join");
if (name) {
    socket.emit('new-user-joined', name);
} else {
    alert("Name is required to join the chat.");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    
    if (message) {
        append(`You: ${message}`, "right");
        socket.emit('send', message);
        messageInput.value = "";
    } else {
        alert("Please enter a message.");
    }
});

socket.on('user-joined', name => {
    append(`${name} joined the chat`, "left");
});

socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, "left");
});

socket.on('left', name => {
    append(`${name} left the chat`, "left");
});
