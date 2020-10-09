/* 
DATA TYPES

SIMPLE/PRIMITIVE DATA TYPES
    Simple data types do not hold, collect, or process other data in any way. Operations on simple data types will 
    return new simple data. Simple data types are copied by value which means a variable will hold a copy of the 
    data value then the original data will remain unchanged.

Number // 123
    Numbers are numeric data including numbers with decimals or exponents.
*/
var num = 1;

/*    
String // "string!"
    Strings are character data which can include single character, words, or numbers included inside single 
    OR double quotation marks. Each character including spaces and punctuation is assigned an index starting 
    at 0 which you can use to organize or manipulate strings.
*/
var string = "string"

console.log(string[2]); //will return "r"

/*
Boolean // true
    Boolean can only have a value of true or false and do not require quotes. Boolean are useful in comparisons
    and controlling flow of a program. 
*/
var bool = true;

/*
undefined // an undefined value
    If a variable has been declared but not assigned to a value, it will return underfined when called.
*/
var example;

console.log(example); // this will return undefined because it has not been asigned to a value
/*
null // absence of value
    Null occurs when a programmer specifically nullifies a given value or operation.

NaN // Not A Number
    NaN is fairly rare but there are several situations when NaN will appear. usually when the result if an 
    operation is expecting a number but will produce something that is either not a number or an imaginary.
*/

/*
COMPLEX DATA TYPES
    Complex data types are those that hold or organize other data. complex data types are declared with variables 
    but the contents or values of these types are generally larger than what a variable can hold, so are copied by 
    reference. As an example when an object is invoked the variable holds a reference to where that original data 
    lives rather than holding the actual data values as in the case of simple data types. 

Array 
    An array is essentially a list of values or objects which are 0 indexed, separated by commas, and are represented inside
    straight brackets. Arrays can hold both simple and complex data types. 
*/
var newArray = [1, "string", true, [1, 2, 3]];

console.log(newArray[2]); // will return true

/*
Object
    Objects are a list of key-value pairs inside curly braces. They can contain both simple and complex data types 
    including other objects and arrays.  Objects are a way to group related data together in a maneable way.
*/
var obj = {
    name: "Sarah",
    faveNumber: 17,
    hobbies: ["dancing", "coding", "drinking water"] 
};

/* ACCESSING OBJECTS- we are able to access values within an object in a couple fo ways. One is bracket notation and 
another is dot notation. Using either of these notations I can add a key value pair to our object above. Bellow are examples of both:
*/

obj.faveColor = "rainbow"; 
obj["faveAnimals"] = ["cat", "lizard"];

/*if we were to console.log obj we would see that the keys faveColor and faveAnimal have been added with values of "rainbow" 
and ["cat", "lizard"].*/


/*
Function
    Functions are chunks of code that a programmer can save to run at a given time for a specific purpose. Functions
    consist of a function declaration with keyword function, an optional function name, followed my parameters inside
    parentheses, a code block inside curly braces, and a function call. Function parameters are essentially place-holders 
    or function input data, called arguments. 
    Return statements: a return statement is what allows a function to produce an output. Not every function will have a 
    return since not every function will produce an output. 
    
    Functions may be formatted as follows:
*/

function functionName (parameter1) {

    return "this is a function"; //this is the block of code that will run when the funciton is called.
};

functionName(arguments); //this is the function call which takes input arguments. 

//NOTE: A function can take as many arguments/parameters as it needs to but must input the same number of arguments and parameters. 

/*

INFINITY
    Infinity is a numeric value representing infinity. 

-INFINITY
    -infinity is the negative numeric value representing infinity.


What is the difference between primitive/simple and complex data types?
    The biggest differences between simple and complex data types are:
    - Immutability- simple data is immutable, complex is not.
    - Ability to hold or process other data- complex data processes simple data.
    - Storage in memory- simple data is copied by value and complex data is copied by reference.
    
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are
they different?
    Simple data types take up so little memory when stored that a copy of the actual data value can be stored inside a variable or other container
    and therefore passed to a function. */
    let simple = "simple string";
    
    let tooSimple = simple;
    
    tooSimple = "this is easy!" //reassigning the value of tooSimple will not change the value of simple since its value was COPIED and put into a new variable...
    
    console.log(simple) //==> return "simple string" because althought that value was copied into a new variable, and then changed, the original variable remains unchanged. 
    
/*    Complex data types ar generally larger than the 8 byte storage of a variable and therefor the variable will store the address where the data 
    is stored, but not store the actual data values. This means that the 
*/
    let complex = {one: "so", two: "complex"};
    
    let tooComplex = complex;
    
    tooComplex.one = "too";
    
    console.log(complex.one)//==> will return "too" because both the references to comple and tooComplex are refering to the same object.






