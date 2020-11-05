/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    sums = [];
    temp = 0;
    for (var i =0; i < nums.length; i++) {
        temp = temp + nums[i];
        sums.push(temp);
    }
    
    return sums;
    
};