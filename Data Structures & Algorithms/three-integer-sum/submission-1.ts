class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        const unique = new Set<string>();

        for (let i = 0; i < nums.length - 2; i++) {
            const seen = new Set<number>();

            for (let j = i + 1; j < nums.length; j++) {
                const complement = -(nums[i] + nums[j]);

                if (seen.has(complement)) {
                    const triplet = [nums[i], nums[j], complement]
                        .sort((a, b) => a - b);

                    const key = JSON.stringify(triplet);

                    if (!unique.has(key)) {
                        unique.add(key);
                        res.push(triplet);
                    }
                }

                seen.add(nums[j]);
            }
        }

        return res;
    }
}