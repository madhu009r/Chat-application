import './App.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

const socket = io('http://localhost:3000')
function App() {

  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {

    const name = prompt("Enter you name: ");
    if(name)
    setUsername(name);

    socket.on('chatMessage', (msg) => {
      setMessage((prev) => [...prev, msg]);
    })
    return () => socket.off('chatMessage');
  }, []);

  const send = () => {
    if (input.trim() !== '') {
      const msgData = { user: username, text: input }
      socket.emit('chatMessage', msgData);
      setInput('');
    }
  }
  return (
    <div className="chat-container">

      <h2>Chat App</h2>
      <ul>
       {message.map((msg, index) => <li key={index} className={`message-bubble ${msg.user == username ? "My-message" : "Another-user"}`}><strong>{msg.user}:</strong>{msg.text}</li>)}
      </ul>
      <div className="input-section">
        <input
          type="text"
          value={input}
          placeholder='Your message...'
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}

export default App