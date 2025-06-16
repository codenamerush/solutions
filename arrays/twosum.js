/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let required = target - nums[i];
        if (hashMap[required]) {
            return [hashMap[required] - 1, i]
        } else {
            hashMap[nums[i]] = i+1;
        }
    }
};