module.exports = bind;
var bindTo = bind.to = require('./to');
var toArrayFromArrayLike = require('@timelaps/to/array/from/array-like');
var bindWith = bind.with = require('./with');

function bind(func, context) {
    return arguments.length < 3 ? bindTo(func, context) : bindWith(func, toArrayFromArrayLike(arguments).slice(1));
}