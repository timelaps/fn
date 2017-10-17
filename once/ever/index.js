module.exports = ever;
var once = require('../');
var falsey = require('../../throws/falsey');
var message = 'Callback was already called';

function ever(fn) {
    return falsey(once(function () {
        fn.apply(this, arguments);
        return true;
    }), message);
}

