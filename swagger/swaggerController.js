const app = require('../app');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

/* Middlewares */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))