/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    var sum = 0;
    
    for(var i = 0; i < mat.length; i++) {
            sum += mat[i][i];
    }
    
    for(var i = 0; i < mat.length; i++) {
        
        sum += mat[mat.length - 1 - i][i];
    }
    
    if (mat.length % 2 != 0) {
        var between = mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)];
        sum = sum - between;
    }
    
    return sum;
    
};