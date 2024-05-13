function solicitud(dep) {
  console.log('Se intentará solicitar');

  const postData = {
    departamento: 'Amazonas',
  };
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  };

  fetch('http://localhost:3000/consulta', request)
    .then(response => {
      if (!response.ok) throw new Error('Error al intentar obtener los datos');
      return response.json();
    })
    .then(datos => {
      console.log(datos);
      return datos;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}
// Datos de casos de COVID-19 en Perú por meses

// Datos de casos de COVID-19 en Perú por meses

let departamento = solicitud('Amazonas');
console.log(departamento);
let dimension = 'confirmed';
let dato = 'date';
//const ejex = departamento.find(dim => )
const defaultx = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const casosPorMes = {
  labels: defaultx,
  datasets: [{
    label: 'Casos de COVID-19 en Perú por Meses',
    data: [3, 5, 100, 1000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Configuración del gráfico
const config = {
  type: 'line',
  data: casosPorMes,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Crear el gráfico
var myChart = new Chart(
  document.getElementById('myChart'),
  config
);
