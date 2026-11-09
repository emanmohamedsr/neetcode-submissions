class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res= new Array(n).fill(1);

        let i=1, j=n-2, left=1, right =1
        while(i<n) {
            left*= nums[i-1]
            res[i]*= left

            right*= nums[j+1] 
            res[j]*= right

            i++
            j--
        }
        
        return res;
    }
}
