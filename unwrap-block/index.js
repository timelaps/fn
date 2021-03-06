module.exports = function unwrapBlock(string_) {
    var string = string_.toString(),
        split = string.split('{'),
        first = split[0],
        trimmed = first && first.trim();
    if (trimmed.slice(0, 8) === 'function') {
        string = split.shift();
        return (string = split.join('{')).slice(0, string.length - 1);
    }
    return split.join('{');
};