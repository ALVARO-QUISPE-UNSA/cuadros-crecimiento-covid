const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 3000;
app.get(('/'), (req, res) => {
  res.status(200).send('<h1>Hola Mundo</h1>');
});
app.listen(PORT, () => {
  console.log(`escuchando en puerto: http://localhost:${PORT}`);
});
