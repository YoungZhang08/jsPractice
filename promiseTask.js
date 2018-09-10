// const myAjax = function(url) {
//     return new Promise(function(resolve, reject) {
//         const handle = function() {
//             if(this.readyState != 4) {
//                 return;
//             }
//             if(this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };

//         const XHR = new XMLHttpRequest();
//         XHR.open('GET', url);
//         XHR.onreadystatechange = handle;
//         XHR.responseType = 'json';
//         XHR.setRequestHeader('Accept', 'application/json');
//         XHR.send();
//     });
// }

// myAjax("http://api.jisuapi.com/idcard/query?appkey=4dcdcf570894095a&idcard=610322199608111921").then(function(data) {
//     console.log(data);
// }, function(err) {
//     console.log(err);
// });

// const promises = [1, 2, 3, 4].map(function(id) {
//     return id;
// });

// Promise.all([1,2,3]).then(function(value) {
//     console.log(value);
// }).catch(function(err) {
//     console.log(err);
// });

