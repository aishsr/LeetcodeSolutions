/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    var target = [];
    var map = [];
    var temp = [];
    
    //initiliaze to 0
    for(var i =0 ; i< index.length; i++) {
        map[index[i]] = 0;
    }
    
    
    //fill values
    for(var i =0 ; i< nums.length; i++) {         
            for (var j = index[i]; j < target.length; j++) {
                temp.push(target[j]);
            }

            
            for (var j = 0; j < temp.length; j++) {
                 target.pop();
            }  
            
            target.push(nums[i]);
                    
        
            for (var h = 0; h < temp.length; h++) {
                target.push(temp[h]);
            }
            temp = [];
    }
    
    return target;
    
};