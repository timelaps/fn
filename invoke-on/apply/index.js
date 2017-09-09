module.exports = callOn;

function callOn(method, args) {
    return function (target) {
        return target[method].apply(target, args);
    };
}