/**
 * 将原生的Ajax封装成Promise
 */

function myAjax(obj) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        if(type == 'get') {
            xhr.send(null);
        } else if(type == 'post') {
            xhr.send(data);
        }
        xhr.onreadystatechange = function() {
            if(xhr.status == 200 && this.readyState == 4) {
                var json = JSON.parse(xhr.responseText);
                resolve(json);
            } else {
                reject('error response:' + xhr.status);
            }
        }
    });
}