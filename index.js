var jsonValidator = require('json-dup-key-validator');

module.exports = function(source) {
    this.cacheable();
    jsonValidator.parse(source, false);
    return source;
};