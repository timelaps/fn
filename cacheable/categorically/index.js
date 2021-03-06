module.exports = categoricallyCachable;
var cacheable = require('../');

function categoricallyCachable(fn, baseCategory) {
    var cache = {};
    categoricallyCachableInstance.cache = cache;
    return categoricallyCachableInstance;

    function categoricallyCachableInstance(string, category_) {
        var cacher;
        var category = category_ || baseCategory;
        cacher = cache[category] = cache[category] || cacheable(fn(category));
        return cacher(string);
    }
}