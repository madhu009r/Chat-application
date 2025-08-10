# Chat-application

# 💬 Real-Time Chat Application

A real-time chat application built using **React**, **Express**, and **Socket.IO**.  
This app allows multiple users to join chat rooms, send/receive instant messages, and see who’s online — all in real time.

## 🚀 Live Preview
Click here to try it out: [**Live Chat App**](https://maangchat.netlify.app/)

---

## 🚀 Features

- **Real-Time Messaging** – Powered by [Socket.IO](https://socket.io/)
- **Multiple Chat Rooms** – Users can join specific rooms
- **User Join/Leave Notifications**
- **Online Users List**
- **Responsive UI** – Works on desktop & mobile
- **Simple Backend API** with Express.js

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Socket.IO Client
- Tailwind CSS / CSS Modules (Replace with your styling choice)

**Backend:**
- Node.js
- Express.js
- Socket.IO Server

---

## 📂 Project Structure
chat-app/
│
├── client/ # React frontend<br>
│ ├── src/<br>
│ │ ├── components/<br>
│ │ ├── App.js<br>
│ │ └── index.js<br>
│ ├── package.json<br>
│<br>
├── server/ # Express + Socket.IO backend<br>
│ ├── index.js<br>
│ ├── package.json<br>
│<br>
├── README.md<br>
└── package.json # Root config (optional for concurrent run)<br>



##📧 Contact
madhubalan009r@gmail.com <br>
GitHub: @madhu009r


## ⚡ Installation & Setup

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
## ⚡ Installation & Setup

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
cd server
npm install

cd ../server
node index.js

cd ../client
npm start

🔗 API & Socket Events
Socket Events

joinRoom – User joins a room

message – Send/receive chat messages

disconnect – User leaves

---



