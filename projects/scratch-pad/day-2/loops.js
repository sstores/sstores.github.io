// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //start beginning of array parameters
  //end at the end of array
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //declare a for loop starting at the end of the array, ending at 0 and decrementing
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);//use array[i] to print each value in array
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 //input: object
 //output: array contianing object keys
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //declare a new array outside of the for in loop.

  var newArray = [];
  
 //declare for in loop
  for (var key in object){ 
    
    //push key into a new array
    newArray.push(key)
  }
  //return the new array
  return newArray;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 //input: object
 //need to loop through the object
 //output: print keys (not values) 
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //declare for in loop
  for (var key in object){
   //print keys to console 
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 //input: object
 //declare array
 //loop through object values
 //push them to new array
 //output: print VALUES of each key
 
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //declare new array
  let valuesArray = [];
  //use for in loop
  for(var key in object){
    //push Values of each key to new array
    valuesArray.push(object[key])
  }
  
  return valuesArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 //input: object
 //action: use for in loop
 //output: print VALUES
 
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //declare for in loop
  for (var key in object){
    //print values of object
    console.log(object[key]);
  }

  return;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
 //input: object
 //action: find number of key/value pairs in object
 //output: print that number
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create new variable count
  let count = 0;
  
  //declare for in loop
  for (var key in object){
        count++;
  }
  //print values of count
  return count;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
 //input: object
 //action: create array of key values 
 //loop through array in reverse
 //output: print values
 
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //declare a new array
 var objArray = [];
  //push values into new array using loop
  for (var key in object){
      objArray.push(object[key]);
  }
  
  for (var i = objArray.length - 1; i >= 0; i--){
      console.log(objArray[i]);
  }
  return;

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
