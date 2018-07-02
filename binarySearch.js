(function() {
    function binarySearch(nums, target) {
        let len = nums.length;
        let low = 0;
        let high = len - 1;

        while(low <= high) {
            let mid = Math.floor((low + high) / 2);

            if(target === nums[mid]) {
                console.log(mid);
                return mid;
            } else if(target < nums[mid]) {
                high = mid;
            } else{
                low = mid;
            }
        }
    }

    binarySearch([5, 7, 7, 8, 10], 8);
})();