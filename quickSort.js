/**手撕快排 */
/**
 * 思路：我们需要在数组中找一个枢轴值，
 * 之后遍历数组，将大于枢轴值的数统一放在
 * 该值的右边，小于枢轴值的统一放到该值的左边
 * 所以，我们还需要确定这个数轴值最后的位置
 * 也就是当low和high指针在移动之后相遇的位置
 * 就是枢轴值的位置，之后再对枢轴值的两端两组
 * 数再递归进行快排
 * 
 * ！！！敲黑板：
 * 枢轴值用来保存low指向的元素，从后
 * 往前先遍历，当high指向的元素小于temp值的时
 * 将high值赋给low值之后跳出循环，当high指向
 * 的值比temp大的时候就移动high指针向前走
 * 从前向后遍历，当low指向的元素大于temp值
 * 的时候，将low值赋给high值之后跳出循环，当
 * low指向的值小于temp的时候就移动low指针
 * 向后走
 */


function quickSort(arr, low, high) {

    if(low < high) {
        let poskey = position(arr, low, high);
        quickSort(arr, low, poskey-1);
        quickSort(arr, poskey+1, high);
    }

}

function position(arr, low, high) {

    let temp = arr[low];

    while(low < high) {
        while(high > low) {
            if(arr[high] < temp) {
                arr[low] = arr[high];
                break;
            }
            high--;
        }

        while(low < high) {
            if(arr[low] > temp) {
                arr[high] = arr[low];
                break;
            }
            low++;
        }
    }
    arr[low] = arr[high] = temp;
    return low;
}

let array = [5, 7, 2, 3, 6, 9, 8, 1];
quickSort(array, 0, 7);
console.log(array);