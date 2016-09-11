'use strict'

const debug = require('debug')('koa_middlewares_with_config')

const call_module_with_config = require('call_module_with_config')

module.exports = function (arr, conf) {
  var middlewares = call_module_with_config(arr, conf)
  debug('middlewares = %s' + middlewares)
  return (middlewares)
}
