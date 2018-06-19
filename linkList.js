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
        let node = new Node(val);
        let current; // current相当于指针，之后从头结点开始移动
        
        if(head === null) { // 链表中的第一个节点
            head = node;
        } else {
            current = head;
            // 循环链表直到找到最后一项，循环结束current指向链表最后一项元素
            while(current.next) {
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
            let current = head; // 头节点
            let previous; // 要插入节点的前驱节点
            let index = 0;
            
            if(pos === 0) {
                // pos===0时，直接将头结点
                node.next = current;
                head = node;
            } else {
                // 循环链表，找到正确位置，循环完毕，previous和current分别是被添加节点的前驱节点和后继节点
                while(index++ < pos) {
                    previous = current;
                    current = current.next;
                }
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

    this.print = function() {
        let current = head;

        for(let i = 0; i < length; i++) {
            console.log(`第${i+1}个值:${current.val}`);
            current = current.next;
        }
    };
}

(function() {
    let linked = new linkList();
    linked.append(2);
    linked.append(3);
    linked.append(4);
    linked.print();
})();