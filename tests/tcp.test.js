const { sendData } = require('../src/tcp');

describe('sendData', () => {
  test('should send data via TCP', () => {
    const mockSocket = {
      write: jest.fn(),
    };
    sendData(mockSocket, 25.5);
    expect(mockSocket.write).toHaveBeenCalledWith('25.5');
  });
});