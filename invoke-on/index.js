module.exports = invokeOn;

function invokeOn(key, argument) {
    return function (target) {
        return target[key](argument);
    };
}