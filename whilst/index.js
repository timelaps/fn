module.exports = function whilst(filter, continuation, _memo) {
    var memo = _memo,
        counter = 0;
    while (filter(memo, counter)) {
        memo = continuation(memo, counter);
        counter += 1;
    }
    return memo;
};