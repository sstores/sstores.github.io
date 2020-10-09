/* 
STRING MANIPULATION
    Strings hold character data that can be represented in text form and are 0 indexed like arrays. Strings can be manipulated in a 
    variety of ways including with operators and methods.
    
WITH OPERATORS
    The addition operator can be used in concatenation to combine multiple strings together. Also comparison operator are useul for 
    evaluating and comparing strings in conditional statements.  
    
*/
//EXAMPLES OF STRING MANIPULATION
//CONCATENATION: concatenate the strings "Hello!" and "How are you?" inlcuding a space inbetween the two.

var stringSentence = "Hello!" + " " + "How are you?";

console.log(stringSentence); // will return "Hello! How are you?"

/*
WITH STRING METHODS
    Similarly to arrays, there are a number of methods that can be used as short hand functions to manipulate strings.*/

const string = "Heyo we gucci!";

//.split find the length of the string "Heyo we gucci!"
let stringArray = string.split(" "); // will return an array of sub strings split at each space
    //==> the variable stringArray contains ["Heyo", "we", "gucci!"] 

//.substr(starting index, ending index) will create a new string only including specified start index and everything before the specified ending index. 
//If no ending index is specified, the new string will copy the entire string starting from the given start index.
let subStr = string.substr(0,7);
    //==> the variable subStr contains "Heyo we" 

//.toUpperCase will shift all characters to capital letters
let upperCase = string.toUpperCase();
    //==> the variable upperCase contains "HEYO WE GUCCI!"
    
//.toLowerCase will shift all characters to lower case letters    
let lowerCase = string.toLowerCase();
    //==> the variable lowerCase contains "heyo we gucci!"
    
//.slice will produce a new string comtaining all character from the give index to the end of the string, or to the given end index.
let sliced = string.slice(4, 7);
    //==> the variable sliced contains " we"
    




