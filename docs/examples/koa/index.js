require('dotenv').config();

const GREETING = process.env.GREETING || 'Hello';
const PORT = 80;

const route = require('koa-route');
const Koa = require('koa');
const app = new Koa();

app.use(
  route.get('/hello/:name', (ctx, name) => {
    console.log(`Log request: ${name}`);
    ctx.body = {
      message: `${GREETING} ${name}`
    };
  })
);

app.listen(PORT);
console.log(`App listening on port ${PORT}!`);
