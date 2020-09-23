// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE // done by Ryan in class
    //input: is a base which is a number or string
    
    //return an entire function that test whether the given vlaue us greater than the base
    
    return function(value){
        //if the value argumenr is greater than the base th eargument retun true
        if(value > base){
            return true;
        } else {
            //if the value is less than the original bas argument return false
            return false;
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 //input: base which will be a string or number
 //return: a function
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
   
   return function(value){
       //if value is less than base return true
       if (value < base){
           return true;
           //otherwise return false
       } else {
           return false;
       }
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 //input: a single character
 //return: function - use starts with method?
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        if (startsWith.toLowerCase() === string[0].toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
 //
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
        return function(string){
        if (endsWith.toLowerCase() === string[string.length - 1].toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
//input is an array of strings
//and a function going into modify
    
    //output is return thea array of strings after using the modify function in them
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //for loop
    //starting point: beginning of strings array
    //end point 
//console.log(strings);

var arr = [];

for (var i = 0; i < strings.length; i++){
    arr.push(modify(strings[i]));
}
    return arr;

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 //input: array of strings, and test function
 //use conditional statements to test buleon
 //output: return true or false
 
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

 // declare a for in loop
 for (var i = 0; i < strings.length; i++){
     //test if all strings pass
    if (test(strings[i]) == false) {
        //return false
        return false;
    } 
     }
         return true;

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}