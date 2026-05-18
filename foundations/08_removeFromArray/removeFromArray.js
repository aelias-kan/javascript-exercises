const removeFromArray = function(arr,...remValue) {
    return arr.filter(  item=> !remValue.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
