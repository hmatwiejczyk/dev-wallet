const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(publicPath, 'index.html');
});

app.listen(3000, () => {
  console.log('server is up');
});