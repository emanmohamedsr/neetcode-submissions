class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false;
        }
        const sorted_S = s.split('').sort().join('')
        const freqMap_S = new Map();
        for(const key of sorted_S) {
            freqMap_S.set(key, (freqMap_S.get(key) || 0)+1)
        }
        
        const sorted_T = t.split('').sort().join('')
        const freqMap_T = new Map();
        for(const key of sorted_T) {
            freqMap_T.set(key, (freqMap_T.get(key)||0)+1)
        }

        for(let i=0 ; i<sorted_S.length; i++) {
            if((sorted_S[i] !== sorted_T[i]) || (freqMap_S.get(sorted_S[i]) !== freqMap_T.get(sorted_T[i]))) {
                return false;
            }
        }
        return true;
    }
}
