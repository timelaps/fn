var bindWith = require('.');
var toArray = require('@timelaps/to/array');
var b = require('@timelaps/batterie');
var obj = {};
b.describe('bindWith', function () {
    b.it('binds functions', [
        ['to a scope', bindWith(returns)(), [global, []]],
        ['when the context is truthy', bindWith(returns, [obj])(), [obj, []]],
        ['with arguments', bindWith(returns, [obj, 1, 2, 3])(), [obj, [1, 2, 3]]]
    ]);
});

function returns() {
    return [this, toArray(arguments)];
}