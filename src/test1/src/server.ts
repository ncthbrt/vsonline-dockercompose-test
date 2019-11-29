import Koa = require('koa');
import Router from 'koa-router';
import fs = require('fs');

const app = new Koa();

const router = new Router();

router.get('/hello-world', (ctx) => {
    ctx.body = 'hello world';
});

router.get('/api/sausages', (ctx) => {
    ctx.body = { sausages: [{ type: 'BIG_ONES' }, { type: 'SKINNY_ONES' }] };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
