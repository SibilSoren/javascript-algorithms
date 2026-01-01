const maxSubArrayBruteForce = function (nums) {
  let maxSum = -Infinity;
  for(let i = 0; i < nums.length; i++){
    let currentSum = 0;
    for(let j = i ; j < nums.length; j++){
        currentSum += nums[j];
        console.log("current sum = " + currentSum);
        maxSum = Math.max(maxSum,currentSum);
    }
    console.log("-----xxxxx------",maxSum)
  }
  return maxSum;
};

const maxSubArrayOptimal = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for(let num in nums){
        currentSum = Math.max(nums[num], currentSum + nums[num]);
        maxSum = Math.max(maxSum,currentSum);
    }

    return maxSum;
}

// Simpler mental model
// const maxSubArray = function(nums) {
//     let currentSum = 0;
//     let maxSum = -Infinity;
    
//     for (const num of nums) {
//         currentSum += num;
//         maxSum = Math.max(maxSum, currentSum);
        
//         // If currentSum goes negative, reset it!
//         // A negative prefix can never help us
//         if (currentSum < 0) {
//             currentSum = 0;
//         }
//     }
    
//     return maxSum;
// };

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayOptimal(nums));


