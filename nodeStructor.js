function Node(value) {
    this.value = value;
    this.next = null;
}

Node.prototype[Symbol.iterator] = function() {
    // 在构造函数的原型链上部署Symbol.iterator方法，
    // 调用该方法会返回遍历器对象iterator，
    // 调用该对象的next方法，在返回一个值的同时，
    // 自动将内部指针移到下一个实例。
    var iterator = {next: next};

    var current = this;

    function next() {
        if(current) {
            var value = current.value;
            current = current.next;
            return {
                done: false,
                value: value
            }
        } else {
            return {done: true};
        }
    }

    return iterator;
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);

one.next = two;
two.next = three;

for(var i of one) {
    console.log(i);
}