module.exports = thrower;
var throws = require('./');

function thrower(fn, message) {
    return function () {
        if (!fn.apply(this, arguments)) {
            throws(message);
        }
    };
}