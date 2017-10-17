var generate = require('.');
var generator = generate();
var b = require('@timelaps/batterie');
b.describe('generator', function () {
    b.expect(generator, 'toBeFunction');
    b.it('generates a value, by default a number counting up', function (t) {
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
    b.it('can have multiple existing at the same time', function (t) {
        var gen0 = generator();
        var gen1 = generator();
        t.expect(gen0.next()).toEqual(gen1.next());
        t.expect(gen0.next()).toEqual(gen1.next());
    }, 2);
    b.it('can be told to stop', function (t) {
        var generator = generate(null, function (context, exposure, counter) {
            // can be any reason
            // but first time it returns true it's done
            return {
                value: counter,
                done: counter >= 2
            };
        });
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
            done: true
        });
        t.expect(gen.next()).toEqual({
            value: undefined,
            done: true
        });
    }, 4);
    b.it('can be told to return a different value', function (t) {
        var generator = generate(null, function (context, exposure, counter) {
            return {
                value: (counter + 1) * 100
            };
        });
        var gen = generator();
        t.expect(gen.next().value).toBe(100);
        t.expect(gen.next().value).toBe(200);
    }, 2);
});