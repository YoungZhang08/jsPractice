/**
 * 手动实现一个apply方法
 * apply() 方法调用一个函数, 其具有一个指定的this值，
 * 以及作为一个数组（或类似数组的对象）提供的参数。
 * 返回值为调用有指定this值和参数的函数的结果。
 * 语法：func.apply(thisArg, [argsArray]);
 */

/**
 * 实现思路：apply() 与 call() 的区别在于传入参数的形式不同。
 * apply() 接受两个参数，第一个参数指定了函数体内 this 对象的指向，
 * 第二个参数为一个数组或类数组。apply() 方法把这个集合中的元素
 * 作为参数传递给被调用的函数。以下基本与call相同
 */

Function.prototype.myApply = function(context, arr) { 

    context = context || global;

    function getContextName(obj) {
        var objName = Math.random();
        if(obj.hasOwnProperty(objName)) {
            getContextName(obj);
        } else {
            return objName;
        }
    }

    var contexName = getContextName(context);

    context.contexName = this;

    if(!arr) {
        var res = context.contextName;
    } else {
        var args = []; // 用来存放参数
        for(var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']'); 
        }
    }

    res = eval('context.contexName(' + args + ')');

    context.contexName();
    delete context.contexName;

    return res;
}

// 测试
var val = 2;

var foo = {
    val: 1,
};

function bar(name, age) {
    console.log(this.val);
    return {
        val: this.val,
        name: name,
        age: age,
    }
}

bar.myCall(null); 
// node环境下，log undefined undefined
// 浏览器测试，log 2 2 { age: undefined, name: undefined, val: 2 } 

console.log(bar.myCall(foo, ['zyy', 21]));
// 1 1 { val: 1, name: 'zyy', age: 21 }