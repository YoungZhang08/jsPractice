/** 
 * 一个升序数组A，一个降序数组B，合并成一个不降序的数组C
 */

/**思路：
 * 1.先处理降序的那个数组为升序，处理方式为镜像对调
 * 2.对两个数组同时遍历，用两个下标来移动
 * 3.当两个数相等的时候，将两个数都push进新数组，然后两个下标同时后移
 * 4.当两个数不等的时候，一定存在一个较小值，然后将较小的值放进新数组，仅移动较小值的数组下标
 * 5.但是要记得处理两数组长度不等的时候，要将剩余那个数组的所有教大值依次push
 * 6.为什么说所有剩余的一定是这组数中的较大值呢？因为你在循环遍历的时候push进新数组的都是较小值
 * so~完成啦~开心 */

let arrA = [1, 6, 8, 9, 11, 13];
let arrB = [11, 10, 8, 5, 3, 2, 1];

function myReverse(arr) {
    for(let i = 0, len = arr.length; i < len/2; i++) {
        let temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }

    return arr;
}

arrB = myReverse(arrB);

function mergeArray(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    let i = 0;
    let j = 0;
    let res = [];

    while((i < len1) && (j < len2)){
        if(arr1[i] === arr2[j]) {
            res.push(arr1[i]);
            res.push(arr2[j]);
            i++;
            j++;
        } else if(arr1[i] > arr2[j]) {
            res.push(arr2[j]);
            j++;
        } else if(arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
    }

    if(i <= len1) {
        for(; i < len1; i++){
            res.push(arr1[i]);
        }
    }
    if(j <= len2) {
        for(; j < len2; j++) {
            res.push(arr2[j]);
        }
    }

    console.log(res);
    return res;
}

mergeArray(arrA, arrB);