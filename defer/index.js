var toArrayFromArrayLike = require('@timelaps/to/array/from/array-like');
module.exports = function defer(fn, time, context) {
    var id;
    return function deferInstance() {
        var context = context || this,
            args = toArrayFromArrayLike(arguments);
        clearTimeout(id);
        id = setTimeout(function deferTimer() {
            fn.apply(context, args);
        }, time);
        return id;
    };
};