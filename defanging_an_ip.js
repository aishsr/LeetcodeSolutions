/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    var newa = [];
    
    for (var i =0; i < address.length; i++) {
        if (address[i] == ".") {
            newa.push("[");
            newa.push(".");
            newa.push("]");
        } else {
            newa.push(address[i]);
        }
    }
    
    var string = newa.join("");
    
    return string;
    
};