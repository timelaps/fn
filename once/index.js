module.exports = once;

function once(fn) {
    var counter = 1;
    instance.counter = counter;
    return instance;

    function instance() {
        if (counter) {
            counter = 0;
            return fn.apply(this, arguments);
        }
    }
}