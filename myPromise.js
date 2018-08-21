/**
 * 实现一个简易版的promise
 */

function Promise(fn) {
    var state = 'pending'; // 初始状态，之后会做转变
    var data = null; // 当前promise的值
    var callbacks = []; // 成功或者失败的回调

    this.then = function(onResolved) {
        if(state === 'pending') {
            callbacks.push(onResolved);
            console.log(this);
            return this;
        }

        onResolved(data);
        return this;
    };

    function resolve(value) {
        data = value;
        state = 'resolved';

        setTimeout(function() {
            callbacks.forEach(function(callback) {
                callback(value);
            });
        }, 0);
    }
    
    // function reject(reason){
    //     data = reason;
    //     state = 'rejected';

    //     setTimeout(function() {
    //         callbacks.forEach(function(callback) {
    //             callback(reason);
    //         });
    //     }, 0);
    // }

    fn(resolve);
    console.log(fn(resolve));
}



var promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(42);
    }, 1000);
});

console.log(promise);
