import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin: 'https://maangchat.netlify.app',
        method: ['GET', 'POST']
    }
})

io.on('connection' , (socket) => {
    console.log("new cliend joined");
    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg)
    })
    socket.on('disconnect', () => {
        console.log("user disconnected");
    })
})

server.listen(3000, () => {
    console.log("server running on port 3000");
})