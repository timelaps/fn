var maker = require('../../indices/maker');
module.exports = maker(function (context, counter) {
    var value = context.length - (counter + 1);
    return {
        value: context.target[value],
        done: value <= 0
    };
});