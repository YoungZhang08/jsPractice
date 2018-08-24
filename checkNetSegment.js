/**
 * 功能: 判断两台计算机IP地址是同一子网络。 
 * 输入参数：String Mask: 子网掩码，格式：“255.255.255.0”； 
 *          String ip1: 计算机1的IP地址，格式：“192.168.0.254”；
 *          String ip2: 计算机2的IP地址，格式：“192.168.0.1”；
 * 返回值： 0：IP1与IP2属于同一子网络；     
 *         1：IP地址或子网掩码格式非法；    
 *         2：IP1与IP2不属于同一子网络
 * 示例
 * 输入 255.255.255.0 192.168.224.256 192.168.10.4
 * 输出 1
 */

function checkNetSegment(mask, ip1, ip2) {
    
    if(checkMask(mask) == false) {
        console.log(1);
        return 1;
    }

    var arrMask = mask.split('.').map(Number);
    var arrIp1 = ip1.split('.').map(Number);
    var arrIp2 = ip2.split('.').map(Number);
    // console.log(arrMask, arrIp1, arrIp2);
    
    var maskRes = getParams(arrMask);
    var ip1Res = getParams(arrIp1);
    var ip2Res = getParams(arrIp2);
    // console.log('maskRes=' + maskRes, 'ip1Res=' + ip1Res, 'ip2Res=' + ip2Res);
    
    var finalA = addTwo(maskRes, ip1Res);
    var finalB = addTwo(maskRes, ip2Res);
    console.log(finalA, finalB);
    
    if(finalA !== finalB) {
        console.log(2);
        return 2;
    }

    console.log(0);
    return 0;
}

// 正则验证IP地址的合法性
function checkIP(ip) {
    if(ip != null || !ip.isEmpty()) {

    }
    var reg =  /^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\.(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$/;

    return reg.test(ip);
}

// 正则验证子网掩码的合法性
function checkMask(MaskStr) {
    /* 有效性校验 */
    var IPPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    
    if(!IPPattern.test(MaskStr))
        return false;

    /* 检查域值 */
    var IPArray = MaskStr.split(".");
    var ip1 = parseInt(IPArray[0]);
    var ip2 = parseInt(IPArray[1]);
    var ip3 = parseInt(IPArray[2]);
    var ip4 = parseInt(IPArray[3]);

    if ( ip1<0 || ip1>255 /* 每个域值范围0-255 */
    || ip2<0 || ip2>255
    || ip3<0 || ip3>255
    || ip4<0 || ip4>255 ) {
        return false;
    }    
}

// 子网掩码&IP地址转二进制
function getParams(arr) {
    var res = [];
    for(var i = 0, len = arr.length; i < len; i++) {
        arr[i] = arr[i].toString(2);
        if(arr[i].length < 8) {
            for(var j = arr[i].length; j < 8; j++) {
                arr[i] += 0;
            }
        }
        res.push(arr[i]);
    }
    return res;
}

// 子网掩码&IP地址相与
function addTwo(arr1, arr2) {
    var result = [];
    for(var i = 0, len = arr1.length; i < len; i++) {
        result.push(arr1[i] && arr2[i]);
    }
    result = result.map(Number);
    return result;
}

checkNetSegment("255.255.255.0", "192.168.224.256", "192.168.10.4");