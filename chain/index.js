module.exports = chain;
var toArray = require('@timelaps/to/array');
var bindTo = require('../bind/to');
var noop = require('../noop');

function chain(child, parent_) {
    var parent = parent_ || noop;
    return function () {
        var args = toArray(arguments);
        var bound = bindTo(parent, this);
        return child.apply([bound].concat(args));
    };
}