# get_koa_middlewares_with_config

get Koa 2.x middlewares with config

[![NPM version](https://img.shields.io/npm/v/koa_middlewares_with_config.svg?style=flat-square)](https://www.npmjs.com/package/get_koa_middlewares_with_config)

## Install

```
$ npm i -S get_koa_middlewares_with_config
```

## Usages

```
var conf = {
  'koa-favicon': {
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  },
  'koa-etag':{
    
  }
}

var middlewares = require('get_koa_middlewares_with_config')(conf)

app.use(middlewares)
```

## Examples


### example 1

- app2.js
- middlewares.js

```
'use strict'

var conf = {
  'koa-favicon': {
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  },
  'koa-etag':{
    
  }
}

module.exports = require('.')(conf)

```

then in app2.js

```
const Koa = require('koa');
const etag = require('koa-etag');
const favicon = require('koa-favicon');
const app = new Koa();

app.use((ctx, next) => {
  return next().then(() => {
    console.log('hello etag fresh= ' + ctx.fresh)
    if (ctx.fresh) {
      ctx.status = 304;
      ctx.body = null;
    }
  });
})

app.use(require('./middlewares'))

app.use((ctx, next)=>{
  console.log('hello etag fresh= ' + ctx.fresh)
  ctx.body = '<h1>hello etag</h1>'
  // ctx.etag = 'etaghaha';
  console.log('hello etag fresh= ' + ctx.fresh)
})

app.listen(3005);

```

### example 2

app.js

```
const Koa = require('koa');
const etag = require('koa-etag');
const favicon = require('koa-favicon');
const app = new Koa();

app.use((ctx, next) => {
  return next().then(() => {
    console.log('hello etag fresh= ' + ctx.fresh)
    if (ctx.fresh) {
      ctx.status = 304;
      ctx.body = null;
    }
  });
})

var conf = {
  'koa-favicon': {
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  },
  'koa-etag':{
    
  }
}

var middlewares = require('.')(conf)

app.use(middlewares)


app.use((ctx, next)=>{
  console.log('hello etag fresh= ' + ctx.fresh)
  ctx.body = '<h1>hello etag</h1>'
  // ctx.etag = 'etaghaha';
  console.log('hello etag fresh= ' + ctx.fresh)
})

app.listen(3005);
```