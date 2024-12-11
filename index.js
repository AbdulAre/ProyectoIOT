const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(bodyParser.json());

// Ruta para probar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Ruta para recibir datos del ESP32
app.post('/sonido', (req, res) => {
  const soundLevel = req.body.soundLevel;
  console.log('Nivel de sonido recibido:', soundLevel);

  // Aquí puedes procesar o almacenar el dato recibido
  res.send({ status: 'OK', soundLevelReceived: soundLevel });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
