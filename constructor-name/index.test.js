var b = require('@timelaps/batterie');
var constructorName = require('.');
b.describe('constructorName', function () {
    b.expect(constructorName).toBeFunction();
    b.it('returns name of the constructor of the instance', function (t) {
        t.expect(constructorName({})).toBe('Object');
        t.expect(constructorName([])).toBe('Array');
        t.expect(constructorName(function () {})).toBe('Function');
        t.expect(constructorName(new Whatever())).toBe('Whatever');

        function Whatever() {}
    }, 4);
});