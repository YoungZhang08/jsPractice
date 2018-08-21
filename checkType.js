/**
 * 实现一个function 可以兼容所有类型的数据判断
 * 对于基本数据类型使用 typeof 检测，引用类型使用
 * Object.prototype.toString.call(obj)检测
 * 注意：IE6中，null 和 undefined 会被 Object.prototype.toString
 * 识别为[object Object]类型
 */

const typeClass = {};

const types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");

// console.log(types); 
// [ 'Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error' ]

// 将其用 map 映射为 [object Number] 类似的形式
types.map(function(item, index) {
    // console.log(item);
    typeClass["[object " + item + "]"] = item.toLowerCase();
});

// console.log(typeClass);
// { '[object Boolean]': 'boolean',
//   '[object Number]': 'number',
//   '[object String]': 'string',
//   '[object Function]': 'function',
//   '[object Array]': 'array',
//   '[object Date]': 'date',
//   '[object RegExp]': 'regExp',
//   '[object Object]': 'object',
//   '[object Error]': 'error' }

function checkType(obj) {
    var typeRes; // 检测结果

    if(obj === null) {
        typeRes = obj + '';
    } else {
        // console.log(Object.prototype.toString.call(obj));
        typeRes = typeof obj === 'object' || typeof obj === 'function' ?
                        typeClass[Object.prototype.toString.call(obj)] || "object" :
                        typeof obj;
    }

    console.log(typeRes);
    return typeRes;
}

var a = function() {
    console.log('111');
};
checkType(a);