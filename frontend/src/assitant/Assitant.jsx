import React, { useState, useEffect } from 'react';
import './Assistant.css';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, type: 'sent' };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  useEffect(() => {
    const sendToBackend = async (newMessage) => {
      try {
        const response = await fetch('http://localhost:3000/chat-bot/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: newMessage.text }),
        });

        if (response.ok) {
          const receivedMessage = await response.text();
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: receivedMessage, type: 'received' },
          ]);
        } else {
          console.error('Error en la respuesta del servidor');
        }
      } catch (error) {
        console.error('Error enviando el mensaje:', error);
      }
    };

    if (messages.length > 0 && messages[messages.length - 1].type === 'sent') {
      sendToBackend(messages[messages.length - 1]);
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <button className="chat-toggle" onClick={toggleChat}>
        Chat GPT
      </button>
      {isOpen && (
        <div className="chat-box open">
          <div className="chat-header">
            <h3>Asistente virtual</h3>
            <button className="chat-close" onClick={toggleChat}>
              &times;
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <p key={index} className={msg.type}>
                {msg.text}
              </p>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Assistant };
