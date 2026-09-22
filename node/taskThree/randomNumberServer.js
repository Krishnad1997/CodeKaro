const http = require('http'); // to create the web server
const fs = require('fs'); // to write logs to a file
const path = require('path'); // to build a reliable file path

// server.log will always be created next to this script, no matter
// which directory the "node" command is run from
const logFilePath = path.join(__dirname, 'server.log');

// appends a timestamped line to server.log; used for both
// the server-start event and every incoming request
function logEvent(message) {
  const logLine = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFile(logFilePath, logLine, (err) => {
    // handle errors instead of letting a failed write go unnoticed
    if (err) console.error('Failed to write to log file:', err);
  });
}

// holds the number currently served to clients
let currentRandomNumber = Math.floor(Math.random() * 100);

// regenerates the random number every 2 seconds, independent of requests
setInterval(() => {
  currentRandomNumber = Math.floor(Math.random() * 100);
  console.log('New random number generated:', currentRandomNumber); // for checking correctness while running
}, 2000);

const server = http.createServer((req, res) => {
  // log who made the request and when
  const clientIp = req.socket.remoteAddress;
  logEvent(`Request received from ${clientIp} - ${req.method} ${req.url}`);

  // respond with the current random number as a simple HTML page
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Random Number: ${currentRandomNumber}</h1>`);
});

const PORT = 3000;
server.listen(PORT, () => {
  const startMessage = `Server running at http://localhost:${PORT}`;
  console.log(startMessage);
  logEvent('Server started - ' + startMessage); // record server start time
});
