/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(nums, target, l, r) {
        if (l > r) return -1;  // base case

        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) return m;
        else if (nums[m] > target) return binarySearch(nums, target, l, m - 1);
        else return binarySearch(nums, target, m + 1, r);
    }

    return binarySearch(nums, target, 0, nums.length - 1);
};

console.log(search([-1,0,3,5,9,12], 9))