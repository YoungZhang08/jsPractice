/**实现：welcome to xiyoumobile lab
 * => lab xiyoumobile to welcome */

/**思路：调用字符串的split方法把字符串分割为字符串数组
 * 必需的参数是分割符，可选参数为数组的最大长度，
 * 返回的数组中的子串不包括分割符
 * 接着将分割完成的字符串数组调用数组的reverse方法反转
 * 之后再对反转后的字符串数组调用数组的join方法以空格分隔为一个字符串*/

const str = 'welcome to xiyoumobile lab';
const res = str.split(' ').reverse();

const strRes = res.join(' ');
console.log(strRes);

/**JS实现：数组的reverse方法 */

/**思路：以数组中间项为基准，对基准线两边的元素镜像对调 */
Array.prototype.myReverse = function() {

    for(let i = 0, len = this.length; i < len / 2; i++) {
        let temp = this[i];
        this[i] = this[len-i-1];
        this[len-i-1] = temp;
    }

    for(let i = 0, len = this.length; i < len; i++) {
        console.log(this[i]);
    }
};

const arr = [1, 3, 5, 7, 9];
arr.myReverse();

/**JS实现：数组的join方法 */

/**思路：将数组元素的相邻项以+方式进行字符串拼接 */
Array.prototype.myJoin = function(splitStr) {
    let str = this[0];

    if(this.length === 0) {
        return 0;
    }

    for(let j = 1, len = this.length; j < len; j++) {
        str += splitStr + this[j];
    }

    console.log(str);
    return str;
};

const string = ['i', 'love', 'you'];
string.myJoin(' ');