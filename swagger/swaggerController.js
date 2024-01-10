const app = require('../app');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const bodyParser = require('body-parser')

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))