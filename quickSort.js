/**手撕快排 */


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