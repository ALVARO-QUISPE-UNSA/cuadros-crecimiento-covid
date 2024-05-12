//npm init -y
//npm install express -E

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT ?? 3000;


app.disable('x-powered-by');


//solicitudes

//app.get(('/'), (req, res) => {
//  res.status(200).send('<h1>Hola Mundo</h1>');
//});

app.use(express.static('public'));

//app.get('/', (req, res) => {
//  res.sendFile(path.resolve(__dirname, 'public/problema1/prueba.html'));
//});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/problema1/dashboard.html'));
});



app.listen(PORT, () => {
  console.log(`escuchando en puerto: http://localhost:${PORT}`);
});
