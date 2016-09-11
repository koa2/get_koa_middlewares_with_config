'use strict'

const debug = require('debug')('koa_middlewares_with_config')

const call_module_with_config = require('call_module_with_config')

module.exports = function (conf) {
  let keys = []

  for(var key in conf){
    keys.push(key)
  }
  
  var middlewares = call_module_with_config(keys, conf)
  debug('middlewares = %s' + middlewares)
  return middlewares
}
