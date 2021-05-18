const express = require('express');
const app = express();
const PORT = 4040;

const users = [
  { id: 1, name: 'Lucky' },
  { id: 2, name: 'Bally' },
  { id: 3, name: 'Susi' },
];

app.get('/', (req, resp) => {
  resp.json('<h1>Hello World!</h1>');
});

app.get('/users', (req, resp) => {
  resp.send(users);
});

app.listen(PORT, () => console.log('The server is listening', PORT));
