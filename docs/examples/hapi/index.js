require('dotenv').config();

const GREETING = process.env.GREETING || 'Hello';
const PORT = 80;

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: '0.0.0.0'
  });

  server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: (request, h) => {
      console.log(`Hapi log: ${request.params.name}`)
      return {
        message: `${GREETING} ${request.params.name}`
      };
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
