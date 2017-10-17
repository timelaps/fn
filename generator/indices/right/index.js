var maker = require('../maker');
module.exports = maker(function (context, counter) {
    return context.length - (counter + 1);
}, function (context, counter) {
    return {
        value: counter,
        done: counter <= 0
    };
});