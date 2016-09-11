const Koa = require('koa');
const etag = require('koa-etag');
const favicon = require('koa-favicon');
const app = new Koa();
const compose = require('koa-compose')

app.use((ctx, next) => {
  return next().then(() => {
    console.log('hello etag fresh= ' + ctx.fresh)
    if (ctx.fresh) {
      ctx.status = 304;
      ctx.body = null;
    }
  });
})

// app.use(app.use(compose(middlewares))require('./middlewares'))
app.use(compose(require('./middlewares')))

app.use((ctx, next)=>{
  console.log('hello etag fresh= ' + ctx.fresh)
  ctx.body = '<h1>hello etag</h1>'
  // ctx.etag = 'etaghaha';
  console.log('hello etag fresh= ' + ctx.fresh)
})

app.listen(3005);
