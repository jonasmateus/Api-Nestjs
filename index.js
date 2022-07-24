const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  res.send([]);
});

app.post('/user/create', async (req, res) => {
  
  res.send('É para criar um usuário...');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));