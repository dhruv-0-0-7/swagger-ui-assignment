const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'My API',
        description: "API Description"
    },
    host: 'localhost:4000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFile = ['./src/server.js'];

swaggerAutogen(outputFile, endpointsFile);