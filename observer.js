function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function defineGet() {
      console.log(`get key: ${key} val: ${val}`);
      return val;
    },
    set: function defineSet(newVal) {
      console.log(`set key: ${key} val: ${newVal}`);
      val = newVal;
    }
  })
}

function observe(data) {
  Object.keys(data).forEach(function(key) {
    defineReactive(data, key, data[key]);
  })
}

let test = [1, 2, 3];
// 初始化
observe(test);
console.log(observe(test)); // 遍历数组索引并打印对应的值
// get key: 0 val: 1
// get key: 1 val: 2
// get key: 2 val: 3

test.push(4); // 新增了索引并改变了长度，但是可以看到新的索引并没有被observe
console.log(observe(test)); 
// get key: 0 val: 1
// get key: 1 val: 2
// get key: 2 val: 3

test[3] = 5;
console.log(observe(test)); // 修改新的索引对应的值触发了对应的set方法，set了的新索引的值被observe时触发了get
// set key: 3 val: 5
// get key: 0 val: 1
// get key: 1 val: 2
// get key: 2 val: 3
// get key: 3 val: 5

test.pop(); // 弹出新的索引对应的值时触发了get方法
console.log(observe(test)); 
// get key: 3 val: 5
// get key: 0 val: 1
// get key: 1 val: 2
// get key: 2 val: 3

test[3] = 10; // 将刚刚弹出的索引重新赋值并没有触发set方法，发现已经删除的索引不会observe
console.log(observe(test)); 
// get key: 0 val: 1
// get key: 1 val: 2
// get key: 2 val: 3

test.unshift(6); // 给数组的第一个位置添加新元素时，首先遍历除首元素外的所有索引和值并存放，然后重新对各索引赋值
console.log(observe(test)); 
// get key: 2 val: 3
// get key: 1 val: 2
// set key: 2 val: 2
// get key: 0 val: 1
// set key: 1 val: 1
// set key: 0 val: 6
// get key: 0 val: 6
// get key: 1 val: 1
// get key: 2 val: 2

test.length = 20; // 可以看到数组的长度虽然更新了，但是新增的索引都是空并不会遍历数组去赋值索引
console.log(test);
// [ [Getter/Setter],
//  [Getter/Setter],
//  [Getter/Setter],
//  [Getter/Setter],
//  [Getter/Setter],
//  <15 empty items> ]
console.log(observe(test));
// get key: 0 val: 6
// get key: 1 val: 1
// get key: 2 val: 2
// get key: 3 val: 3
// get key: 4 val: 10