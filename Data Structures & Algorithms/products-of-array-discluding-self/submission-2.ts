class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const products= new Array(n).fill(1);

        let i=1, j=n-2, prefix=1, suffix =1
        while(i<n) {
            prefix*= nums[i-1]
            products[i]*= prefix

            suffix*= nums[j+1] 
            products[j]*= suffix

            i++
            j--
        }
        
        return products;
    }
}
