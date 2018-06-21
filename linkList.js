/**
 * js实现：链表的创建、删除、添加、插入、
 * 返回索引、判空、返回个数等方法
 */

function linkList() {
    // Node类声明
    function Node(val) {
        this.val = val;
        this.next = null;
    }

    // 初始化链表长度
    let length = 0;
    // 初始化第一个元素
    let head = null;

    // 尾添加
    this.append = function(val) { // 向链表尾部添加一个新的项
        let node = new Node(val); // 实例化一个新的节点
        let current;
        
        if(head === null) { // 链表中的第一个节点
            head = node; // 当链表中没有一个节点的时候，将实例化的新节点(地址)赋值给head成为链表的第一个元素，此时node和head的变量值里都保存着内存中的同一个地址
        } else { // 当链表中有其他元素的时候
            current = head; // current也指向head指向的内存地址
            while(current.next) {
                // 循环链表直到找到最后一项，循环结束current指向链表最后一项元素
                current = current.next;
            }
            // 找到最后一项元素后。将他的next属性指向新元素node，建立连接
            current.next = node;
        }

        length++; // 更新链表长度
    };

    // 插入
    this.insert = function(pos, val) {
        // 判断是否越界
        if(pos >= 0 && pos <= length) {
            let node = new Node(val); // 要插入的节点
            let current = head; // current指向链表的第一个元素
            let previous; // 要插入节点的前驱节点
            let index = 0;
            
            if(pos === 0) {
                // 当要插入到位置为零号位置的时候，将第一个元素在内存中的地址赋值给新实例化的节点的next域，将新节点和原首元素建立连接
                node.next = current;
                head = node; // 更换头指针指向新加元素的地址作为链表的第一个元素
            } else {
                // 最开始的时候后继节点指向链表的第一个元素，第一次循环的时候让前驱节点也指向第一个元素，后继节点后移
                while(index++ < pos) {
                    // 循环链表，移动前驱节点的指针和后继节点的指针找到新加节点的前方和后方
                    previous = current;
                    current = current.next;
                }
                // 找到正确位置之后先连接后继节点再断开前驱和后继连接前驱和新加节点
                node.next = current;
                previous.next = node;
            }
            // 更新长度
            length++;
            return true;
        } else {
            return false;
        }
    };

    // 删除
    this.removeAt = function(pos) {
        // 检查是否越界
        if(pos > -1 && pos < length) {
            let current = head;
            let previous;
            let index = 0;

            if(pos === 0) {
                // 移除一个元素
                head = current.next;
            } else {
                while(index++ < pos) {
                    previous = current;
                    current = current.next;
                }   
                // 找到删除的元素位置之后将其的前驱节点和其后继节点相连接
                previous.next = current.next;
            }
            // 更新链表长度
            length--;
            return current.val;
        } else {
            return null;
        }
    };

    // 返回查找元素的索引
    this.indexOf = function(val) {
        let current = head;
        let index = 0;

        while(current) {
            if(val === current.val) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    // 判空
    this.isEmpty = function() {
        return length === 0;
    };

    // 链表长度
    this.size = function() {
        return length;
    };

    // 清空链表
    this.clear = function() {
        let current = head;
        let index = 0;
        while(current) {
            this.removeAt(index++);
            current = current.next;
        }
        length = 0;
        head = null;
    }
    // 打印
    this.print = function() {
        let current = head;

        for(let i = 0; i < length; i++) {
            console.log(`第${i+1}个值:${current.val}`);
            current = current.next;
        }
    };
}

// 测试函数
(function() {
    let linked = new linkList();
    linked.append(2);
    linked.append(3);
    linked.append(4);
    linked.insert(2, 6);
    console.log(linked.removeAt(1)); // 3
    console.log(linked.indexOf(6)); // 1
    console.log(linked.size()); // 3
    linked.clear();
    console.log(linked.isEmpty()); // true
    linked.print();
})();