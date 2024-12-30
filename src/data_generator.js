const { parentPort } = require('worker_threads');

function generateTemperature() {
  // 生成随机温度数据的逻辑
  // ...
  return Math.random() * 10 + 20;
}

let intervalId;

parentPort.on('message', (message) => {
  if (message === 'start') {
    intervalId = setInterval(() => {
      const temperature = generateTemperature();
      parentPort.postMessage(temperature);
    }, 500);
  } else if (message === 'stop') {
    clearInterval(intervalId);
  }
});