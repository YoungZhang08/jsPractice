/**
 * 将以下的嵌套对象中有多余空白字符串的属性值
 * 删除所有的空白字符后返回
 */

var obj = {
    address : ' guangzhou',
    company : '   CVTE',
    direction : {
        web : '  web',
        Android : 'Android',
        ios : ' ios'
    },
    abc : [{
        ai : ' a',
        bi : '  b',
        ci : '  c'
    }]
};

String.prototype.myTrim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

function iTrim(obj) {
    for(var i in obj) {
        if(typeof obj[i] === 'object') {
            iTrim(obj[i]);
        } else {
            obj[i] = obj[i].myTrim();
        }
    }
}

console.log(obj);
iTrim(obj);
console.log(obj);


  