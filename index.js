//npm init -y
//npm install express -E
//npm install cors
const express = require('express');
const cors = require('cors');
const datos_departamentos = require('./data.json');
const app = express();
const path = require('path');
const PORT = process.env.PORT ?? 3000;


app.disable('x-powered-by');


//solicitudes

//app.get(('/'), (req, res) => {
//  res.status(200).send('<h1>Hola Mundo</h1>');
//});

app.use(cors());
app.use(express.static('public'));

app.post('/consulta', (req, res) => {
  //const {departamento, dimension} = req.body;
  //console.log(departamento, dimension);
  console.log((req.body));
  res.status(200).json(datos_departamentos);
});

//app.get('/', (req, res) => {
//  res.sendFile(path.resolve(__dirname, 'public/problema1/prueba.html'));
//});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/problema1/dashboard.html'));
});



app.listen(PORT, () => {
  console.log(`escuchando en puerto: http://localhost:${PORT}`);
});
