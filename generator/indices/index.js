var returnsSecond = require('@timelaps/returns/second');
var maker = require('./maker');
module.exports = maker(returnsSecond, function (context, counter) {
    return {
        value: counter,
        done: context.length <= (counter + 1)
    };
});