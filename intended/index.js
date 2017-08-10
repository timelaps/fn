var u, isObject = require('@timelaps/is/object'),
    isArray = require('@timelaps/is/array'),
    forEach = require('@timelaps/hacks/for/each'),
    reverseParams = require('../reverse-params'),
    forOwn = require('@timelaps/hacks/for/in/has');
module.exports = function intended(key, value, fn) {
    var obj;
    if (isArray(key)) {
        forEach(key, function (first) {
            fn(first, value);
        });
    } else {
        if ((obj = isObject(key) ? key : u)) {
            forOwn(obj, reverseParams(fn));
        } else {
            fn(key, value);
        }
    }
};