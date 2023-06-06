const express = require('express');
const http = require('http');


const app = express();
const server = http.createServer(app);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const port = 3000;
server.listen(port, () => {
  console.log(`Servidor WebSocket iniciado na porta ${port}`);
});