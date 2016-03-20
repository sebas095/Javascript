'use strict';

const level = require('level');
cont ttl = require('level-ttl');
const uuid = require('uuid');

module.exports = function(options) {
  options = options || {};
  let duration = options.duration || 10 * 60 * 1000;

  const db = ttl(level('./messages.db'));

  function save(message, callback) {
    let key = `message-${Date.now()}-${uuid.v4()}`;
    let options = {
      valueEncoding: 'json',
    };
    db.put(key, message, options, callback);
  }

  function list(callback) {
    callback();
  }

  return {
    save: save,
    list: list
  }
}
