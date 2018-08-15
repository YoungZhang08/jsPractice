/**
 * 编写一个javscript函数 fn，
 * 该函数有一个参数 n（数字类型），
 * 其返回值是一个数组，该数组内是 n 个随机且不重复的整数，
 * 且整数取值范围是 [2, 32]。
 */

function fn(n) {
    var res = [];
    if(typeof n == 'number') {
        for(var i = 0; i < n; i++) {
            var num = Math.floor(Math.random() * 32) + 2;
            if(res.indexOf(num) !== -1) {
                i--;
            } else {
                res.push(num);
            }
        }
    }
    return res;
}

console.log(fn(6));
