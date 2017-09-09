var indecesGenerator = require('.');
var b = require('@timelaps/batterie');
b.describe('indecesGenerator', function () {
    b.expect(indecesGenerator, 'toBeFunction');
    b.it('iterates over array like objects', function (t) {
        var gen = indecesGenerator([1, 2, 3, 4]);
        t.expect(gen.next()).toEqual({
            value: 1,
            done: false
        });
        t.expect(gen.next()).toEqual({
            value: 2,
            done: false
        });
        t.expect(gen.next()).toEqual({
            value: 3,
            done: false
        });
        t.expect(gen.next()).toEqual({
            value: 4,
            done: true
        });
        t.expect(gen.next()).toEqual({
            value: undefined,
            done: true
        });
        t.expect(gen.next()).toEqual({
            value: undefined,
            done: true
        });
    }, 6);
});