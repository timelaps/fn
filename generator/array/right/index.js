var maker = require('../../indices/maker');
module.exports = maker(function (context, counter) {
    return context.length - (counter + 1);
}, function (context, counter) {
    return {
        value: context.target[counter],
        done: counter <= 0
    };
});