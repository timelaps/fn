module.exports = callOn;
var toArray = require('@timelaps/to/array');

function callOn(method, args_) {
    var args = toArray(args_);
    return function (target) {
        var fn = target[method];
        return fn.call.apply(fn, [target].concat(args));
    };
}