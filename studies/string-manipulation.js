/* 
STRING MANIPULATION
    Strings hold character data that can be represented in text form and are 0 indexed like arrays. Strings can be manipulated in a 
    variety of ways including with operators and methods.
    
WITH OPERATORS
    The addition operator can be used in concatenation to combine multiple strings together. Also comparison operator are useul for 
    evaluating and comparing strings in conditional statements.  
    
*/
//EXAMPLE- concatenate the strings "Hello!" and "How are you?" inlcuding a space inbetween the two.

var stringSentence = "Hello!" + " " + "How are you?";

console.log(stringSentence); // will return "Hello! How are you?"

/*
WITH STRING METHODS
    Similarly to arrays, there are a number of methods that can be used as short hand functions to manipulate strings.
*/
//EXAMPLE- find the length of the string "Heyo we gucci!"

var string = "Heyo we gucci!";

console.log(string.length); // will return 14.

//other string methods include .split .join .splice .push .shift etc.

