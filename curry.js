/**
 * 实现：curry(2)(3)(4) = 24
 * 函数柯里化原理：将含有多个参数的函数转换成一系列使用一个参数的函数
 */

// 第一版：
/**
 * 缺点：代码不够优雅，需要层层嵌套，可扩展性差，n层嵌套呢？
 */
function curry(a) {
    return function(b) {
        return function(c) {
            console.log(a*b*c);
            return a*b*c;
        }
    }
}

curry(1)(2)(3);

// 第二版：
/**
 * 缺点：比闭包更复杂，执行方式不同于题目要求
 */
function curry(fn) {
    // fn 用于动态创建柯里化的函数，余下的参数存储在 args 变量中
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        // console.log('newArgs=' + newArgs);
        return fn.apply(this, newArgs);
    }
}
function multiFn(a, b, c) {
    console.log(a*b*c);
    return a*b*c;
}

var multi = curry(multiFn);
multi(2, 3, 4);

// 第三版：
/**
 * 缺点：必须事先知道求值的参数个数
 */
function curry(fn, args) {
    var length = fn.length; // length 属性指明函数的形参个数 argument.length是函数被调用时实际传参的个数
    // console.log(length);
    var args = args || [];
    return function() {
        console.log(Array.prototype.slice.call(arguments));
        // arguments 属性的值是最近一次该函数调用时传入的实参
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        console.log(newArgs);
        if(newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn.apply(this, newArgs);
        }
    }
}

function multiFn(a, b, c) {
    console.log(a*b*c);
    return a*b*c;
}

var multi = curry(multiFn);
multi(2)(3)(4);
multi(2, 3, 4);
multi(2)(3, 4);
multi(2, 3)(4);