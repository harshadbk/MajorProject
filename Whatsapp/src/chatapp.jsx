import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import './style.css';
import img from './whatspng.jpeg';
import audio2 from './mp3ring.mp3';

const socket = io('http://localhost:3000');

const ChatApp = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isNameSet, setIsNameSet] = useState(false);
    const audio = new Audio(audio2);

    useEffect(() => {
        socket.on('user-joined', (name) => {
            appendMessage(`${name} joined the chat`, 'left');
        });

        socket.on('receive', (data) => {
            appendMessage(`${data.name}: ${data.message}`, 'left');
        });

        socket.on('left', (name) => {
            appendMessage(`${name} left the chat`, 'left');
        });

        return () => {
            socket.off('user-joined');
            socket.off('receive');
            socket.off('left');
        };
    }, []);

    const appendMessage = (message, position) => {
        setMessages((prev) => [...prev, { message, position }]);
        if (position === 'left') {
            audio.play();
        }
    };

    const handleSubmitName = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setIsNameSet(true);
            socket.emit('new-user-joined', name);
        } else {
            alert("Name is required to join the chat.");
        }
    };

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            appendMessage(`You: ${message}`, 'right');
            socket.emit('send', message);
            setMessage('');
        } else {
            alert("Please enter a message.");
        }
    };

    return (
        <div>
            <h1>Welcome To Our Farm Chat App</h1>
            <nav>
                <img className="logo" src={img} alt="WhatsApp Logo" />
            </nav>
            {!isNameSet ? (
                <div className="name-container">
                    <form onSubmit={handleSubmitName}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <button type="submit">Join Chat</button>
                    </form>
                </div>
            ) : (
                <div>
                    <div className="container">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.position}`}>
                                {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="send">
                        <form id="send-container" onSubmit={handleSubmitMessage}>
                            <input
                                type="text"
                                id="messageInp"
                                name="messageInp"
                                placeholder="Type your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button className="btn" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatApp;
