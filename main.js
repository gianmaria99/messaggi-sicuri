const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
dotenv.config();

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message',message=>{
        socket.broadcast.emit('new_message',message);
    })
});

app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname,'/front')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/front'));

app.get('/', (req, res) => {
  res.render('home/chat')
})

server.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})