module.exports = cacheableCopy;
var _stringify = require('@timelaps/json/stringify');
var _parse = require('@timelaps/json/parse');

function cacheableCopy(fn, stringify_, parse_) {
    var stringify = stringify_ || _stringify;
    var parse = parse_ || _parse;
    var cache = {};
    cacheableCopyInstance.cache = cache;
    return cacheableCopyInstance;

    function cacheableCopyInstance(string) {
        var result, cached;
        if (!(cached = cache[string])) {
            result = fn(string);
            cached = cache[string] = stringify(result);
        }
        return parse(cached);
    }
}