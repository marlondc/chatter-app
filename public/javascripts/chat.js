var socket = io()
socket.on('socketToMe', function(data) {
  console.log(data);
})

function sendFunction() {
  socket.emit('new message', { username: $('#user-name').val(), message: $('#new-message').val() })
  $('#new-message').val('')
  return false
}

socket.on('chat message', function(msg) {
  $('#messages').append($('<li>').text(msg.username + ': ' + msg.message))
})
