/*
FUNCTIONS
The two phases to using functions: First we must declare or define the function using hte keyword function, an optional name, parenthese 
for any parameters, and curly brackets for the function body. 

How do we assign a function to a variable?
    We assign a function to a variable by reference not by value, beacuse the function is too large for the value to be copied directly into the variable.
    In the example below, we've declared this function with a variable using the keyword let and a function name followed by our basic function syntax.
*/
    let func = function (){}; 
/*
Next we can execute or call a function by writing a function call ehich includes the name of the function and parenthese and any arguments to be passed to the function. 
*/    
    func(); //we have no arguments in this example
/*
What’s the difference between a function’s parameters and arguments PASSED to a function?
    Function parameters are essentially place holders for the inputs that will be passed through the function. Arguments are the values 
    or inputs that will be passed to the function when called. These can be simple or complex datatyoes There must be equal number of parameters and arguments or else the fnuction 
    will not run properly.
    
Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
    Inputs for a function are called arguments, which are passed to the function in the function call. Paramters ar ethe placeholders where arguments qill be passed to the function.
    Funciton outputs will repend on what the function is coded to do or what is in the function body. 
    
What’s the syntax for a NAMED function?
*/
//We have a function declaration, function name, and function parameters inside parentheses 
function functionName (parameter) {

    //Fucntion Body is the block of code inside the curly braces that will run when the funciton is called
    console.log("this is a function!"); 
}
//this is the function call which uses the function name and holds arguments to be passed to the function.
functionName(arguments);

/*    
  
Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
    Global scope exists outside of function or other constraints. Within functions there is local or function scope which allows control over the content of the function.

Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that 
closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript 
Closures with Ease)
*/
