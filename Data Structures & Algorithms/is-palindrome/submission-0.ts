class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        const reversed = filtered.split('').reverse().join('')
        return filtered === reversed
    }
}
