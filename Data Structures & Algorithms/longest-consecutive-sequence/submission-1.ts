class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const uniqueSortedNums = Array.from(new Set(nums.sort((a,b)=> a-b)));
        let longest = 1;

        return uniqueSortedNums.reduce((acc, current, index) => {
            (index > 0 && current === (uniqueSortedNums[index - 1] + 1))
            ? longest++ 
            : longest = 1;

            return Math.max(longest, acc);
        }, 0)
    }
}
