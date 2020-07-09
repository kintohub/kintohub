require('dotenv').config();

const express = require('express');
const app = express();
const PORT = '80';
const GREETING = process.env.GREETING || 'Hello'

app.get('/hello/:name', (req, res) => {
  console.log('Log request: ', req.params.name);
  return res.send({
    message: `${GREETING} ${req.params.name}`
  });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
