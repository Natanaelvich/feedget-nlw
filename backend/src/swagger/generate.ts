const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Feedget API',
      description: 'Get Feedbacks user clients',
    },
    host: 'localhost:3000',
    schemes: ['http'],
  };

const outputFile = './src/swagger/swagger_output.json';
const endpointsFiles = ['./src/server.ts'];

swaggerAutogen(outputFile, endpointsFiles,doc);