var socket = io();

socket.on('connect', function (){
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'John',
    text: 'hey whats up?'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
