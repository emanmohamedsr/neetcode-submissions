class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsLen= nums.length;
        for( let i=0; i< numsLen; i++) {
            const num2 = target - nums[i];
            const num2Index = nums.indexOf(num2);
            if( num2Index !== -1 && num2Index !== i ) {
                return [i, num2Index];
            }
        }
        return [0, 0];
    }
}
