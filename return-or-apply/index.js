var isFunction = require('@timelaps/is/function');
module.exports = function returnOrApply(obj_or_fn, context, args) {
    return isFunction(obj_or_fn) ? obj_or_fn.apply(context, args) : obj_or_fn;
};