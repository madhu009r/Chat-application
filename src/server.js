import http from 'http';
import express from 'express';
import cors from 'cors';
import {Server} from 'socket.io';



const app=express();
app.use(cors());

const server=http.createServer(app);
const io= new Server(server,{
    cors: {
        origin:"http://localhost:5173/",
        methods:["GET","POST"]
    }
});

io.on('connection',(socket)=>{
    console.log('New client connected');

    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    });

    socket.on('disconnect')
})