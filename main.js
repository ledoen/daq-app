const { app, BrowserWindow, ipcMain } = require('electron');
const net = require('net');
const { generateTemperature } = require('./src/temperature');
const { sendData } = require('./src/tcp');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html');

  setInterval(() => {
    const temperature = generateTemperature();
    sendData(client, temperature);
    win.webContents.send('temperature', temperature);
  }, 40);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const client = new net.Socket();
client.connect(8080, 'localhost', () => {
  console.log('Connected to server');
});