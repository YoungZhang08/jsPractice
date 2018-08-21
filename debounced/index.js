/**
 * 实现一个防抖函数
 * 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的
 * 时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发
 * 事件，我才执行
 */

/**
 * onmouse事件会被频繁的触发
 */
var count = 1;
var myContainer = document.getElementById('container');

function getUserAction() {
    myContainer.innerHTML = count++;
};

myContainer.onmousemove = getUserAction;

/**
 * onmouse事件触发后1s后才会再执行
 */
function debounced(func, wait) {
    var timeout;

    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}

/**
 * 使debounced中的this指向绑定事件的元素
 */
function debounced(func, wait) {
    var timeout;

    return function() {
        var that = this;

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(that);
        }, wait);
    }
}

/**
 * 使window上的event对象在debounced中依然可使用
 */
function debounced(func, wait) {
    var timeout;
    
    return function() {
        var that = this;
        var args = arguments;
        // console.log(args);

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(that, args);
        }, wait);
    }
}

/**
 * 使事件不必等事件停止触发后才执行，而是立即执行，然后等到停止触发 n 秒后，才可以重新触发执行。
 */
function debounced(func, wait, immediate) {
    // func 为要执行的函数
    // wait 为等待的时间
    // immediate 判断是否立即执行
    var timeout;
    
    return function() { // 返回一个闭包
        var that = this; // 保存绑定元素的this
        var args = arguments;

        if(timeout) clearTimeout(timeout);
        if(immediate) { 
            // 判断是否立即调用，并且如果定时器存在，则不立即调用
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if(callNow) func.apply(that, args); // 如果是第一次触发，并且immediate为true，则立即执行
        } else {
            timeout = setTimeout(function() {
                func.apply(that, args);
            }, wait);
        }
    };
}

myContainer.onmousemove = debounced(getUserAction, 1000, true);