const express = require('express');
const app = express();
const port = 6969;

app.get('/welcome', (req, res) => {
  res.send('Welcome to the server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});