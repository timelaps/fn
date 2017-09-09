var generator = require('.');
var b = require('@timelaps/batterie');
b.describe('generator', function () {
    b.expect(generator, 'toBeFunction');
    b.it('iterates over array like objects', function (t) {
        var gen = generator();
        t.expect(gen.next()).toEqual({
            value: 0,
            done: false
        });
        t.expect(gen.next()).toEqual({
            value: 1,
            done: false
        });
        t.expect(gen.next()).toEqual({
            value: 2,
            done: false
        });
    }, 3);
});