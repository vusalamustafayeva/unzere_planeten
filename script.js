document.getElementById('chatIcon').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'flex';
});
document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'none';
});
document.getElementById('sendChat').addEventListener('click', function() {
    let chatInput = document.getElementById('chatInput');
    let chatBody = document.querySelector('.chat-body');
    if(chatInput.value.trim() !== '') {
        let userMessage = document.createElement('p');
        userMessage.textContent = chatInput.value;
        chatBody.appendChild(userMessage);
        chatInput.value = '';
    }
});