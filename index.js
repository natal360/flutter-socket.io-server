const express = require('express');
const path = require('path');
require('dotenv').config();

// Express App
const app = express();

// Node Server
const server = require('http').createServer(app);
// io を受け取れるようにする
module.exports.io = require('socket.io')(server);
// socket.js を使用
require('./socket/socket');




// Path public
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


server.listen(process.env.PORT, (err) => {

  if (err) throw new Error(err);

  console.log('Server running http://localhost:3000/', process.env.PORT);
});