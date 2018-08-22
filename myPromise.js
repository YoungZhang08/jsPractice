/**
 * 实现一个简易版的promise
 */

function Promise(fn) {
    var state = 'pending',
        value = null,
        callbacks = [];

    this.then = function (onFulfilled, onRejected) {
        return new Promise(function (resolve, reject) {
            handle({
                onFulfilled: onFulfilled || null,
                onRejected: onRejected || null,
                resolve: resolve,
                reject: reject
            });
        });
    };

    function handle(callback) {
        if (state === 'pending') {
            callbacks.push(callback);
            return;
        }

        var cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
            ret;
        if (cb === null) {
            cb = state === 'fulfilled' ? callback.resolve : callback.reject;
            cb(value);
            return;
        }
        ret = cb(value);
        callback.resolve(ret);
    }

    function resolve(newValue) {
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (typeof then === 'function') {
                then.call(newValue, resolve, reject);
                return;
            }
        }
        state = 'fulfilled';
        value = newValue;
        execute();
    }

    function reject(reason) {
        state = 'rejected';
        value = reason;
        execute();
    }

    function execute() {
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                handle(callback);
            });
        }, 0);
    }

    fn(resolve, reject);
}

// function Promise(fn) {
//     this.state = 'pending'; // Promise 当前的状态
//     this.data = ''; // Promise 当前的返回值
//     this.callbacks = []; // 回调队列

//     fn(this.resolve, this.reject);
// }

// Promise.prototype = {
//     constructor: Promise,

//     resolve: function(result) {
//         // var that = this;
//         this.state = 'fulfilled';
//         this.data = result;
//         console.log(this.callbacks);
//         // for(var i = 0, len = this.callbacks.length; i < len; i++) {
//         //     this.handle(result);
//         // }
//         setTimeout(function() {
//             this.callbacks.forEach(callback => {
//                 this.handle(callback);
//             });
//         }, 0);
//     },

//     reject: function(error) {
//         this.state = 'rejected';
//         this.data = error;
//         setTimeout(function() {
//             this.callbacks.forEach(callback => {
//                 this.handle(callback);
//             });
//         }, 0);
//     },

//     then: function(onFulfilled, onRejected) {
//         var that = this;
//         // console.log(that);
//         console.log(that.callbacks);
//         return new Promise(function(resolve, reject) {
//             // console.log('111');
//             that.handle({
//                 onFulfilled: onFulfilled || null,
//                 onRejected: onRejected || null,
//                 resolve: resolve,
//                 reject: reject
//             });
//         });
//     },

//     handle: function(callback) {
//         // console.log('111');
//         if(this.state === 'pending') {
//             this.callbacks.push(callback);
//         }
//         // console.log(this.callbacks);
//         // console.log(this.state);

//         var cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;
//         var ret;
//         // console.log(cb);
//         if(cb === null) {
//             cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
//             // console.log(cb);
//             // cb(this.data);
//             // console.log('2222');
//             return;
//         }

//         try{
//             ret = cb(this.data);
//             callback.resolve(ret);
//         } catch(e) { 
//             callback.reject(e);
//         }
//     },
// };

var promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(42);
    }, 1000);
});

promise.then(val => {console.log(val)});

console.log(promise);
