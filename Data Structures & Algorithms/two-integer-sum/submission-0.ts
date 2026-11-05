class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsLen= nums.length;
        for( let i=0; i< numsLen; i++) 
            for( let j= i+1; j< numsLen; j++) 
                if( nums[i] + nums[j] === target)
                    return [i, j];
        return [0, 0];
    }
}
