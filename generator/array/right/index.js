module.exports = arrayGeneratorRight;
var indecesGenerator = require('../../indices/right');

function arrayGeneratorRight(array) {
    return indecesGenerator(array, function (index) {
        return array[index];
    });
}