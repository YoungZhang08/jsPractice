/**
 * 手动实现一个call方法
 * call() 方法调用一个函数, 其具有一个指定的this值
 * 和分别地提供的参数(参数的列表)。返回值是你调用的方法的返回值，
 * 若该方法没有返回值，则返回undefined。
 * 语法：fun.call(thisArg, arg1, arg2, ...);
 */

/**
 * 实现思路：首先明确，call和apply都是在函数运行时指定this值
 * 所以，从语法来看，就像是thisArg对象调用了fun函数（方法）
 * 具体实现步骤：1. 将fun函数设为thisArg对象的属性 2.执行fun函数
 * 3. 删除fun函数
 * 注意：属性名起什么都无所谓，反正最后要删除
 */

Function.prototype.myCall = function(context) { 
    // context就是call方法中传入的第一个参数要绑定的对象
    // 这个参数可以传null或undefined，这种情况下this指向全局（非严格模式）
    // 严格模式下返回undefined，不会指向全局，所以下面做个处理

    context = context || global;
    // 这里要注意下，测试的时候出了bug，因为编辑器的测试环境依赖于node
    // 所以最开始写的context = context || window在下面测试传参为null的时候报错了
    // window is not defined 因为node环境中没有window对象，全局是global对象
    // 所以这行代码在编辑器中测试的时候需要设置为context = context || global
    // 在浏览器中测试的时候需要设置为context = context || window

    // 防止传入对象的原有属性被覆盖，所以增加一个取名函数
    function getContextName(obj) {
        var objName = Math.random();
        if(obj.hasOwnProperty(objName)) {
            getContextName(obj);
        } else {
            return objName;
        }
    }

    var contexName = getContextName(context);

    // 因为bar调用的myCall，所以myCall函数内部的this是指向bar的
    context.contexName = this; // 用this获取调用myCall方法的函数

    // 在函数体内，可以通过 arguments 对象来访问这个类数组，
    // 从而获得传递给函数的每一个参数。传入参数的长度不确定，
    // 可以从arguments对象中取第二个到最后一个
    var args = []; // 用来存放参数
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']'); 
        // 执行后 args为 ['arguments[1]', 'arguments[2]', 'arguments[3]']

        // 这里push的是参数的字符串表示而不是参数值是因为，
        // 比如说最后args是[1, 2, 3]，在下面调用eval进行字符串拼接的时候，
        // JS会做一个隐式转换，将args数组转换为字符串，调用数组的toString()方法，
        // 所以会将args数组变为'1,2,3'，这样就相当于是1个参数而非原本的3个了
    }

    // 将参数数组放进执行函数的参数里面，这里用eval()做字符串拼接，
    // eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    var res = eval('context.contexName(' + args + ')'); 
    // 调用call方法的函数也是可以有返回值的

    context.contexName(); // 相当于foo.bar()
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

console.log(bar.myCall(foo, 'zyy', 21));
// 1 1 { val: 1, name: 'zyy', age: 21 }