module.exports = indecesGeneratorMaker;
var generator = require('../');

function indecesGeneratorMaker(transformer) {
    return generator(function (context) {
        var length = context.length;
        if (!length) {
            return this.return();
        }
        return {
            target: context,
            length: length
        };
    }, function (context, exposure, counter_) {
        // ignore exposure because we don't want to
        // be influenced by outside forces
        return transformer(context, counter_);
    });
}