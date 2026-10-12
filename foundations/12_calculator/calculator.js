const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((acc,curr) => acc+curr,0); 
};

const multiply = function(array) {
  return array.reduce((acc, curr) => acc * curr)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
  let fact =1;
	for (let i =n; i>0; i--)
    {
      fact *= i;
    }
    return fact;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
