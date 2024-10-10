const assert = require('assert');
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numMap = new Map(); // this will contain all the num : nums
    // map key: nums[i] =>  value: index i 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return []; // no solution;
};


function test(){
    // Test case 1
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1], 'Test case 1 failed');

    // Test case 2
    assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2], 'Test case 2 failed');

    // Test case 3
    assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1], 'Test case 3 failed');

    console.log("All tests passed!");
}

test();