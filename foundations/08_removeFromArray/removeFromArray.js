const removeFromArray = function(arr,...remValue) {
    return arr.filter(item=> {arr.splice(remValue,1)});
};

// Do not edit below this line
module.exports = removeFromArray;
