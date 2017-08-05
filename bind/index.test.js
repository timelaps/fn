var bind = require('.');
var b = require('@timelaps/batterie');
var toArray = require('@timelaps/to/array');
var obj = {};
b.describe('bind', function () {
    b.it('creates new functions when it binds', function (t) {
        t.expect(bind(noop, obj)).notToEqual(noop);
    });
    b.describe('allows functions to be run in a different context', function () {
        b.it('by default it is a noop', function (t) {
            t.expect(bind(noop)).toBe(noop);
        });
        b.it('will bind to truthy values', function (t) {
            t.expect(bind(noop, obj)()).toEqual([obj, []]);
        });
        b.it('can also bind arguments', function (t) {
            t.expect(bind(noop, obj, 1, 2, 3)()).toEqual([obj, [1, 2, 3]]);
        });
    });
});

function noop() {
    return [this, toArray(arguments)];
}