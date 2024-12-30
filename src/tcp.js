function sendData(socket, data) {
    socket.write(String(data));
  }
  
  module.exports = {
    sendData,
  };