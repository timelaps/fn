var u;
module.exports = cacheable;

function cacheable(fn) {
    var cache = {};
    cacheableInstance.cache = cache;
    return cacheableInstance;

    function cacheableInstance(input) {
        var value;
        if ((value = cache[input]) === u) {
            value = cache[input] = fn(input);
        }
        return value;
    }
}