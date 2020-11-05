/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    //get max
    max = candies[0];
    for (var i =0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
            }
    }
    
    //check max
    check = [];
    for (var i =0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            check.push(true);
        } else {
             check.push(false);
        }
    }
    
    return check;
    
};