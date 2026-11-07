class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res= new Array(n).fill(1);

        let leftProducts =1;
        for(let i=0; i<n; i++) {
            res[i] *= leftProducts;
            leftProducts *= nums[i];
        }
        let rightProducts =1;
        for(let i=n-1; i>=0; i--) {
            res[i] *= rightProducts;
            rightProducts *= nums[i];
        }
        
        return res;
    }
}
