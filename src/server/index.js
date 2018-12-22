var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.port || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT, ()=>{
  console.log("Connection to port: " + PORT );
})
