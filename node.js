const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

// Обработка подключений
io.on('connection', (socket) => {
  console.log('A user connected');

  // Отправка сообщения
  socket.on('send_message', (message) => {
    io.emit('receive_message', message); // Рассылаем сообщение всем подключенным пользователям
  });

  // Отключение пользователя
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Запуск сервера
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
