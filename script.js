const chat = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && messageInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = messageInput.value;
        message.style.margin = "10px";
        message.style.background = "#202225";
        message.style.borderRadius = "5px";
        message.style.padding = "10px";
        chat.appendChild(message);
        messageInput.value = '';
        chat.scrollTop = chat.scrollHeight;
    }
});
