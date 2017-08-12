var u, forEach = require('@timelaps/hacks/for/each'),
    reverseParams = require('../reverse-params'),
    forOwn = require('@timelaps/hacks/for/in/has'),
    maker = require('./maker');
module.exports = maker(function (key, value, fn) {
    forEach(key, function (key) {
        fn(key, value);
    });
}, function (obj, fn) {
    forOwn(obj, reverseParams(fn));
});