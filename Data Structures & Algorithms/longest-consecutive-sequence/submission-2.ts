class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sortedNums = nums.sort((a,b)=> a-b)
        let longest = 1;

        return sortedNums.reduce((acc, current, index) => {
            (index > 0 && current === (sortedNums[index - 1] + 1))
            ? longest++ 
            : (index > 0 && current === (sortedNums[index - 1]))
            ? longest
            : longest = 1;

            return Math.max(longest, acc);
        }, 0)
    }
}
