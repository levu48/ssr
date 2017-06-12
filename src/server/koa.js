import Koa from 'koa';
import Router from 'koa-router';
import clientRouter from './client-router';


const app = new Koa();

app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

const apiRouter = new Router({prefix: '/api'});
require('./api/routes')(apiRouter);
app.use(apiRouter.routes());

app.use(clientRouter);

app.listen(4000);
console.log("Koa server listens to port: 4000");

