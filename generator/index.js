var returnsSecondArgument = require('@timelaps/returns/second');
var returnsFirstArgument = require('@timelaps/returns/first');
module.exports = gen;

function gen(array, dir_, cap_, incrementor_, transformer_) {
    var previous, dir = dir_ || 1,
        length = array.length,
        counter = dir > 0 ? -1 : length,
        transformer = transformer_ || returnsFirstArgument,
        incrementor = incrementor_ || returnsSecondArgument,
        cap = cap_ || (counter < 0 ? untilLength : until0);
    return next;

    function next() {
        counter += dir;
        if (cap(counter)) {
            return;
        }
        return transformer(previous = incrementor(previous, counter, array));
    }

    function untilLength(counter) {
        return counter >= length;
    }

    function until0(counter) {
        return counter < 0;
    }
}