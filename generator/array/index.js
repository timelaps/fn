module.exports = arrayGenerator;
var indecesGenerator = require('../indices/maker');

function arrayGenerator(array) {
    return indecesGenerator(array, function (index) {
        return array[index];
    });
}