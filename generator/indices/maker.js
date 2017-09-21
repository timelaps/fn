module.exports = indecesGeneratorMaker;
var returnsFirst = require('@timelaps/returns/first');
var generator = require('../');

function indecesGeneratorMaker(array, transformer) {
    var length = array.length;
    var max = length - 1;
    return generator(lessThanMax, transformer, function () {
        return !length;
    });

    function lessThanMax(counter) {
        return counter >= max;
    }
}