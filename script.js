const socket = io();

// Отправка сообщения
document.getElementById('message-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const message = event.target.value;
    socket.emit('send_message', message);
    event.target.value = '';
  }
});

// Получение сообщений
socket.on('receive_message', function(message) {
  const messagesDiv = document.getElementById('messages');
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  messagesDiv.appendChild(newMessage);
});
