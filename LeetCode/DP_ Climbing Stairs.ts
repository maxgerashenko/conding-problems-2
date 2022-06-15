// https://leetcode.com/problems/climbing-stairs/
// 70. Climbing Stairs

let climbStairs = function(n) {    
    // Constraints
    // 1<= n
  
    if(n<4) return n;
  
    let cur = 0,
        s1 = 1,
        s2 = 2;
    for(let i=2;i<n;i++){
        cur = s1 + s2;
        s1 = s2;
        s2 = cur;
    }
    
    return cur;
};

// Python
class Solution:
    def climbStairs(self, n: int) -> int:
        if(n<4) :
            return n
        
        s1, s2, cur = 1, 2, 0
        for i in range(2, n):
            cur = s1 + s2;
            s1 = s2;
            s2 = cur;
            
        return cur