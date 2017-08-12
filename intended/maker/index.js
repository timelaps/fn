var u, isObject = require('@timelaps/is/object'),
    isArray = require('@timelaps/is/array');
module.exports = function maker(handleArray, handleObject) {
    return function intended(key, value, fn) {
        var obj;
        if (isArray(key)) {
            return handleArray(key, value, fn);
        } else {
            if ((obj = isObject(key) ? key : u)) {
                return handleObject(key, fn);
            } else {
                fn(key, value);
            }
        }
    };
};