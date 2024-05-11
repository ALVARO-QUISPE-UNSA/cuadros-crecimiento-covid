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

app.use((req, res) => {
  res.status(400).sendFile(path.join(__dirname, 'pages/dashboard.html'));
});




app.listen(PORT, () => {
  console.log(`escuchando en puerto: http://localhost:${PORT}`);
});
