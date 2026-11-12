class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        
        for(let i =0, j = filtered.length - 1; i < j; i++, j--)
            if(filtered[i] !== filtered[j]) 
                return false   
        
        return true
    }
}
