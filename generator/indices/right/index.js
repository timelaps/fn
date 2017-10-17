var maker = require('../maker');
module.exports = maker(function (context, counter) {
    var value = context.length - (counter + 1);
    return {
        value: value,
        done: value <= 0
    };
});