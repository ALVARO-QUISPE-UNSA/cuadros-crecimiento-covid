//
function solicitud() {
  console.log('Se intentará solicitar');
  const postData = {
    departamento: 'Amazonas',
    dimension: 'confirmados',
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
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}
// Datos de casos de COVID-19 en Perú por meses

// Datos de casos de COVID-19 en Perú por meses
const ejex = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const casosPorMes = {
  labels: ejex,
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
