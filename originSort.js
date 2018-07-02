/**
 * 手动实现一个sort方法，要求与原生的sort一模一样
 * 原理：冒泡排序算法
 */

Array.prototype.mySort = function(func) {
    var flag = true;
    for(var i = 0; i < this.length && flag; i++) {
        flag = false;
        for(var j = this.length - 1; j >= i; j--){
            if(func(this[j], this[j+1]) > 0) {
                var temp = this[j+1];
                this[j+1] = this[j];
                this[j] = temp;
                flag = true;
            }
        }  
    }
}

var arr = [3, 1, 4, 5, 6, 7];
arr.mySort(function(a, b) {return a- b;});
console.log(arr);