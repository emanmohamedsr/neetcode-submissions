class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) 
            return false;
        
        const sorted_S = s.split('').sort().join('')
        const sorted_T = t.split('').sort().join('')
        
        return sorted_S === sorted_T;
    }
}
