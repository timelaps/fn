module.exports = gen;
var u;
var returnsFalse = require('@timelaps/returns/false');
var returnsFirst = require('@timelaps/returns/first');
var returnsTrue = require('@timelaps/returns/true');
var once = require('../once');
gen.Generator = Generator;
gen.noop = gen(returnsTrue);

function Generator() {}

function gen(doner_, accessor_, nostart_, doer_) {
    // do something or do nothing
    var finished = false;
    var doer = doer_ || Generator;
    var nostart = once(nostart_ || returnsFalse);
    var doner = doner_ || returnsFalse;
    var accessor = accessor_ || returnsFirst;
    var counter = 0;
    Generator.prototype = {
        next: next
    };
    return new Generator();

    function next(exposure) {
        if (finished || nostart(counter)) {
            return {
                value: u,
                done: true
            };
        }
        var done = doner(counter);
        var value = accessor(counter);
        doer(counter, exposure);
        counter += 1;
        finished = done;
        return {
            value: value,
            done: done
        };
    }
}