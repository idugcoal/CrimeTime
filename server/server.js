var express = require('express');
var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

var api = require('../secret');
console.log(api);

app.post('/', (req, res) => {
  var body = ''
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    let params = JSON.parse(body);
    let time = params;
    // let params = {screen_name: username.username, count: '25'};
    console.log('time', time)

  });
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});