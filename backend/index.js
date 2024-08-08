const http = require('http');
const app = require('./src/app');
const { importData } = require('./config/dbConfig');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/swaggerCongif');

// Agrega las rutas de Swagger antes de iniciar el servidor
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

const serverHttp = http.Server(app);

(async () => {
  try {
    await importData();
    serverHttp.listen(3000, () => {
      console.log('Listening on port 3000');
      console.log('API Documentation available at http://localhost:3000/api-docs');
    });
  } catch (error) {
    console.error('Error during data import:', error);
  }
})();
