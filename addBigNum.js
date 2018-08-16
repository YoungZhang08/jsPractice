// 大数相加
function add(a, b) {

    var straArr = a.split('').reverse();
    var strbArr = b.split('').reverse();

    var straLen = straArr.length;
    var strbLen = strbArr.length;

    var addFlag = 0;
    var res = [];

    
    for(var i = 0; i < straLen && i < strbLen; i++) {
        var temp = parseInt(straArr[i]) + parseInt(strbArr[i]) + addFlag;
        res[i] = temp % 10;

        addFlag = parseInt(temp / 10);
    }

    console.log(i, res, addFlag);

    if(i < straLen) {
        for(; i <= straLen; i++) {

            if(i == straLen && addFlag != 0) {
                res[i] = addFlag;
                break;
            }

            if(i == straLen) {
                break;
            }

            res[i] = (parseInt(straArr[i]) + parseInt(addFlag))%10;
            addFlag = (parseInt(straArr[i]) + parseInt(addFlag))/10;
            console.log(i, res, addFlag);
        }
    } else {
        for(; i <= strbLen; i++) {
            
            if(i == strbLen && addFlag != 0) {
                res[i] = addFlag;
                break;
            }

            if(i == strbLen) {
                break;
            }

            res[i] = (parseInt(strbArr[i]) + parseInt(addFlag))%10;
            addFlag = (parseInt(strbArr[i]) + parseInt(addFlag))/10;
            console.log(i, res, addFlag);
        }
    }

    var final = res.reverse().map(item => {
        return parseInt(item);
    }).join('');

    return final;
}

console.log(add('9999999999999', '9999999'));
