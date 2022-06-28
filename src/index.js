module.exports = function reverse (n) {
    n = Math.abs(n);
    result = n.toString().split('').reverse().join('');
    return result
}


