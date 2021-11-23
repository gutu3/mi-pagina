const express = require('express');
const app = express();
const port = 3000;
app.get('/yoheroku', (req, res) => {
  res.send('Escuchando en el puerto 3000!')});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)});
