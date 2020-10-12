////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a range function that takes two arguments, start and end, and returns 
//an array containing all the numbers from start up to (and including) end.
//input: two numbers
//output: an array of all numbers from start to end inclusively

function range(start, end, step = start < end ? 1 : -1) {
  let result = [];
  if(start === end){
    return [];}
  // loop iterates up for positive step values
  // and iterates down for negative step values
  for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
    //if step is positive, i <= end
    //if step is negative, i >= end
    result.push(i);
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a sum function that takes an array of numbers and returns the sum of these numbers.
function sum(array) {
  let sum = array.reduce(function(acc, cv){
    return acc + cv;
  }, 0);
  
return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
//input: array
//output: array in reverse
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// modifies the array given as argument by reversing its elements.
//input: array
//output: same array modified to be in reverse

function reverseArrayInPlace(array) {

for(let i = 0; i < Math.floor(array.length / 2); i++){
  
  let old = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = old;
}  
 return array; 
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/
function arrayToList(array) {
  let list = null;
 
 for(let i = array.length - 1; i >= 0; i--){
   
    list = {value: array[i], rest: list};
  
 } 
  
 return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a listToArray function that produces an array from a list.
//input: list
//output: array

function listToArray(list) {
  
  let array = [];
  
  for (let node = list; node; node = node.rest) {
      array.push(node.value);
  }
   console.log(list);
  return array;
}  
    

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list 
  
function prepend(value, list) {
  return {value, rest: list}
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
//or undefined when there is no such element.

function nth(list, n) {
  //base cases
  if (!list) return undefined;
  else if (n == 0) return list.value;
  //recursive case
  else return nth(list.rest, n - 1); 
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function deepEqual that takes two values and returns true only if they are the 
//same value or are objects with the same properties, where the values of the properties 
//are equal when compared with a recursive call to deepEqual.
//input: two values a and b//could be any data type...
//output: boolean- true or false

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
