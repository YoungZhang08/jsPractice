/**实现一个方法，完成拼接 URL和对应URL所需参数 */
function getParam(url, params) {
    var arr = [];
    if(typeof params === 'object'){
        for(var param in params){
            arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
        }
        arr = arr.join('&');    //将拼接成功的字符串数组继续赋给arr数组
    }
    console.log(`${url}?${arr}`);
    return `${url}?${arr}`;
}

getParam('https://youngzhang08.github.io', {date: '2018-08-12', article: 'myMVVM'});