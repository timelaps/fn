module.exports = bind;
var toArray = require('@timelaps/to/array');
var bindTo = bind.to = require('./to');
var bindWith = bind.with = require('./with');

function bind(func, context) {
    return arguments.length < 3 ? bindTo(func, context) : bindWith(func, toArray(arguments).slice(1));
}