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
app.use(express.json());
app.use(express.static('public'));

app.post('/consulta', (req, res) => {
  //const {departamento, dimension} = req.body;
  //console.log(departamento, dimension);
  if (!req.body.departamento) 
    res.status(400).json({error: 'Solicitud incorrecta, no se encuentra un departamento: '});
  let departamento = datos_departamentos.find(item => item.region === req.body.departamento);
  console.log('Se devolverá: ', departamento);
  res.status(200).json(departamento);
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
