var objectToString = require('@timelaps/hacks/call-to-string');
module.exports = constructorName;

function constructorName(object) {
    var constructorName = objectToString(object).split(/\s|\]/igm)[1];
    return constructorName === 'Object' ? object.constructor.name : constructorName;
}