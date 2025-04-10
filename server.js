const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'world';
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
