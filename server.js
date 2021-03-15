const express = require('express');
const server = express();
server.all('/', (req, res)=>{
      res.sendStatus(200);
    res.send('Bot Is Alive')
 console.log(Date.now() + " Just got pinged!");
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

var http = require('http');

http.createServer(function (req, res) {
  res.write("   I'm alive");
  res.end();
}).listen(8080);
module.exports = keepAlive;