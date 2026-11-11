class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sortedNums = nums.sort((a, b) => a - b);
        const uniqueNums = Array.from(new Set(sortedNums));
        let longest = 1;
        return uniqueNums.reduce((acc, current, index) => {
            if (index>0 && current === uniqueNums[index - 1] + 1) {
                longest++;
            } else {
                longest = 1;
            }
            acc = Math.max(longest, acc);
            return acc;
        }, 0)
    }
}
