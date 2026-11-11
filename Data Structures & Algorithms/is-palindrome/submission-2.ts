class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    private isAlphaNumeric(c: string): boolean {
        return /[a-zA-Z0-9]/.test(c);
    }
    isPalindrome(s: string): boolean {
        let i=0, j=s.length-1, left, right;
        while(i<j){
            left = s[i].toLowerCase();
            right = s[j].toLowerCase();
            while(i<j && !this.isAlphaNumeric(left)){
                i++;
                left = s[i].toLowerCase();
            }
            while(i<j && !this.isAlphaNumeric(right)){
                j--;
                right = s[j].toLowerCase();
            }
            if(left !== right) return false;
            i++;
            j--;
        }
        return true;
    }
}
