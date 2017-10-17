module.exports = gen;
var u;
var returnsFalse = require('@timelaps/returns/false');
var returnsFirst = require('@timelaps/returns/first');
var returnsTrue = require('@timelaps/returns/true');
var toArrayFromArrayLike = require('@timelaps/to/array/from/array-like');
var bindTo = require('../bind/to');
var once = require('../once');
var noop = require('../noop');
gen.Generator = Generator;
gen.noop = gen(returnsTrue);

function Generator() {}

function gen(starter_, yielder_) {
    // do something or do nothing
    return function () {
        var starter = starter_ || returnsFirst;
        var finished = false;
        var counter = 0;
        var returned = null;
        var context = null;
        var args = toArrayFromArrayLike(arguments);
        Generator.prototype = {
            next: next,
            return: returner,
            throw: thrower
        };
        var generator = new Generator();
        var yielder = bindTo(yielder_ || returnsCounter, generator);
        return generator;

        function thrower(value) {
            return {
                value: value,
                done: finished
            };
        }

        function returner(value) {
            finished = true;
            return {
                value: value,
                done: finished
            };
        }

        function next(exposure_) {
            var exposure = exposure_;
            if (finished) {
                return {
                    value: u,
                    done: true
                };
            } else if (counter === 0) {
                // blatant overwrite on first
                context = starter.apply(generator, args);
                if (finished) {
                    return context;
                }
            }
            var c = counter;
            counter += 1;
            var result = yielder(context, exposure, c);
            // enforce finished when return is called
            finished = finished || result.done;
            return result;
        }
    };
}

function returnsCounter(context, exposure, counter) {
    return {
        value: counter,
        done: false
    };
}