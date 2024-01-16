// Chat.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import DocNavbar from '../doctor/navbar';

const Chat = ({ roomId }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch messages from Firebase or your backend
        // You can use Firebase Realtime Database or Cloud Firestore
        // For simplicity, I'm using a state here

        // Example structure for messages:
        // { id: 1, sender: 'Doctor', text: 'Hello, how can I help you?' }
        // { id: 2, sender: 'Patient', text: 'I have a question about my medication.' }
        setMessages([
            { id: 1, sender: 'Doctor', text: 'Hello, how can I help you?' },
            { id: 2, sender: 'Patient', text: 'I have a question about my medication.' },
        ]);
    }, [roomId]);

    const handleSendMessage = () => {
        // Send the message to Firebase or your backend
        // Update the messages state with the new message
        // For simplicity, I'm just updating the state
        const newMessage = { id: messages.length + 1, sender: 'Patient', text: message };
        setMessages([...messages, newMessage]);
        setMessage('');
    };

    return (
        <div>
            <DocNavbar />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Chat</Typography>
                    <IconButton color="inherit" edge="end">
                        <VideoCallIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '10px' }}>
                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.sender}: </strong>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <IconButton color="primary" onClick={handleSendMessage}>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;
