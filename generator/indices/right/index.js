module.exports = generatorIndecesRight;
var indecesGeneratorMaker = require('../maker');
var returnsFirst = require('@timelaps/returns/first');

function generatorIndecesRight(array, transformer) {
    var max = array.length - 1;
    var accessor = transformer || returnsFirst;
    return indecesGeneratorMaker(array, function (counter) {
        return accessor(max - counter);
    });
}