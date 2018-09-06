function flatten(obj){
    var result = {};

    function recurse(src, prop) {
        var toString = Object.prototype.toString;
        if(toString.call(src) === '[object Object]') {
            var isEmpty = true;
            for (var p in src) {
                isEmpty = false;
                recurse(src[p], prop ? prop + '.' + p : p)
            }
            if (isEmpty && prop) {
                result[prop] = {};
            }
        } else if(toString.call(src) == '[object Array]') {
            var len = src.length;
            if (len > 0) {
                src.forEach(function (item, index) {
                    recurse(item, prop ? prop + '[' + index + ']' : index);
                })
            } else {
                result[prop] = [];
            }
        } else {
            result[prop] = src;
        }
    }
    recurse(obj, '');

    return result;
}

console.log(flatten({
    a: 1,
    b: [1, 2, {c: true}, [3]],
    d: {e: 2, f:3},
    g: null,
}));