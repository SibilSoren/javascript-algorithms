// https://leetcode.com/problems/two-sum/description/

const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
    const diff = target - nums[i];
    if (Object.hasOwn(map, diff.toString())) {
      return [i, map[diff]];
    }
    map[nums[i]] = i;
  }
  return [-1, -1];
};

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
