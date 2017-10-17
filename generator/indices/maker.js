module.exports = indecesGeneratorMaker;
var generator = require('../');

function indecesGeneratorMaker(transformer, continues) {
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
        var value = transformer(context, counter_);
        return continues(context, value);
    });
}