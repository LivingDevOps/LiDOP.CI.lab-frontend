const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use('/proxy', proxy({
    pathRewrite: {
       '^/proxy/': '/'
    },
    target: 'https://www.10.20.30.40.xip.io/port/9110',
    secure: false
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000);
console.log('Server started');