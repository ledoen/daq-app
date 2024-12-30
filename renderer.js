const { ipcRenderer } = require('electron');

const temperatureElement = document.getElementById('temperature');

ipcRenderer.on('temperature', (event, temperature) => {
  temperatureElement.textContent = temperature.toFixed(2);
});