module.exports = chain;
var toArrayFromArrayLike = require('@timelaps/to/array/from/array-like');
var bindTo = require('../bind/to');
var noop = require('../noop');

function chain(child, parent_) {
    var parent = parent_ || noop;
    return function () {
        var args = toArrayFromArrayLike(arguments);
        var bound = bindTo(parent, this);
        return child.apply([bound].concat(args));
    };
}