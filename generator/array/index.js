var returnsSecond = require('@timelaps/returns/second');
var maker = require('../indices/maker');
module.exports = maker(returnsSecond, function (context, counter) {
    return {
        value: context.target[counter],
        done: context.length <= (counter + 1)
    };
});