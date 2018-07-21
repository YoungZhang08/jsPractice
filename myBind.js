/**
 * 手动实现一个bind方法
 * bind() 方法会创建一个新函数。
 * 当这个新函数被调用时，bind() 的第一个参数
 * 将作为它运行时的 this，之后的一序列参数
 * 将会在传递的实参前传入作为它的参数。
 * 语法：fun.bind(thisArg[, arg1[, arg2[, ...]]]);
 */

/**
 * 实现思路：1. 返回一个函数 2. 可以传入参数
 */

Function.prototype.myBind = function(context) {
    if(typeof this !== 'function') {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var that = this;

    // 获取bind函数从第二个到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1); // 相当于arguments对象调用数组的slice方法截取函数的第二个到最后一个参数

    var fNOP = function() {};

    var fBound = function() {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);

        // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
        // 将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        return that.apply(this instanceof fNOP
                          ? this
                          : context, 
                          args.concat(bindArgs));
    }
    
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fNOP.prototype = this.prototype; 
    
    // 下面的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象
    // 作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();
    return fBound;
}

