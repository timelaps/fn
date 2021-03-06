var callMethod = require('../call-method');
var isString = require('@timelaps/is/string');
module.exports = function flows(fromHere, toHere) {
    var toIsString = isString(toHere),
        fromIsString = isString(fromHere);
    return function flow(arg) {
        return callMethod(toIsString, toHere, this, callMethod(fromIsString, fromHere, this, arg));
    };
};