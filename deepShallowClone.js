var obj = {
    name : 'miaorenjie',
    age: 20,
    like: ['black', 'white']
};

/**纯粹浅拷贝 */
var obj1 = obj;
obj1.name = 'young';
obj1.like[0] = 'pink';
console.log(obj); // { name: 'young', age: 20, like: [ 'pink', 'white' ] }
console.log(obj1); // { name: 'young', age: 20, like: [ 'pink', 'white' ] }

/**循环赋值浅拷贝 */
function shallowCopy(src) {
    var result = {};
    for(var i in src) {
        if(src.hasOwnProperty(i)) {
            result[i] = src[i];
        }
    }
    return result;
}
var obj1 = shallowCopy(obj);
obj1.name = 'young';
obj1.like[0] = 'pink';
obj1.age = 21;
console.log(obj); // { name: 'miaorenjie', age: 20, like: [ 'pink', 'white' ] }
console.log(obj1); // { name: 'young', age: 21, like: [ 'pink', 'white' ] }

/**Object.assign(target,···source)浅拷贝 */
var obj1 = Object.assign({}, obj);
obj1.like.push('pink');
console.log(obj); // { name: 'miaorenjie', age: 20,like: [ 'black', 'white', 'pink' ] }
console.log(obj1); // { name: 'miaorenjie',age: 20,like: [ 'black', 'white', 'pink' ] }

/**序列化对象深拷贝 */
var result = JSON.parse(JSON.stringify(obj));
result.age = 21;
result.name = 'young';
result.like.push('pink');
console.log(obj); // { name: 'miaorenjie', age: 20, like: ['black', 'white' ] }
console.log(result); // { name: 'young', age: 21, like: [ 'black', 'white', 'pink' ] }

/**递归深拷贝*/
function deepCopy(src, res) {
    var res = res || {};
    for(var i in src) {
        if(typeof src[i] === 'object') {
            res[i] = (src[i].constructor === Array) ? [] : {};
            deepCopy(src[i], res[i]);
        } else {
            res[i] = src[i];
        }
    }
    
    return res;
}

var obj2 = {};
deepCopy(obj, obj2);
obj2.age = 21;
obj2.like[1] = 'blue';
console.log(obj); // { name: 'miaorenjie', age: 20, like: [ 'black', 'white' ] }
console.log(obj2); // { name: 'miaorenjie', age: 21, like: [ 'black', 'blue' ] }

/**Object.assign(target,···source)深拷贝 */
var obj3 = {
    name: 'lilu',
    age: 23,
    like: 'blue',
};

var obj1 = Object.assign({}, obj3);
obj1.name = 'young';
obj1.age = 21;
obj1.like = 'pink';
console.log(obj3); // { name: 'lilu', age: 23, like: 'blue' }
console.log(obj1); // { name: 'young', age: 21, like: 'pink'}