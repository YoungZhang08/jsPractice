/**实现两个方法：add和del分别对url之后的参数作添加和删除 */
function add(originString, addKey, addValue){
    // console.log(originString + '&' + addKey + '=' + addValue);
    return originString + '&' + addKey + '=' + addValue;
}

function del(originString, delKey) {
    let arr = originString.split('&');
    var map = new Map();
    var res = [];

    arr.forEach((item) => {
      arr = item.split('=');
      map.set(arr[0], arr[1]);
    });
    
    map.forEach(function (value, key) {
        if(delKey === key) {
            map.delete(key);
        }
    });

    // console.log(map);
    map.forEach(function(value, key) {
        res.push(key + '=' + value);
    });
    console.log(res.join('&'));
}

add('a=1', 'b', 2);
del('a=1&b=2&c=3', 'b');