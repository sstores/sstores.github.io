/*
Control flow

Conditional Statements are one way that we can control the flow of our programs. Using If, Else-if, and Else statements we can 
control which blocks of code run based on whether a given condition is true or false.

If Statements 
    If statements will allow a block of code to run based on if a given a condition evaluates to true.
Else-if Statements
    Else-if statements are a corrollary to if statements that can run a block of code based on the truthiness of a second conditio if the first conditions is false.
Else Statements
    An Else statment has no condition but willhold the default code block to run, should the previous conditions all be false.

If/else-if/else statments are formatted as follows:
*/
var firstCondition;
var secondCondition;


if (firstCondition === true){ //whatever is inside the parentesis must evaluate to true for the following code block to run
    //if true will run this block  
    console.log("first condition true");
    //if not true, the code will move to the next statement
    
} else if (secondCondition === true){  //else-if can account for additional conditions that may be true. 
//you can have as many else if statements as necessary to check all conditions.
    console.log("second condition true");
    
} else { //if none of the previous conditions are true, one can use an else statement to hold a default block of code.
    
    console.log("default will run");
}

/* NOTE: Order of the conditions DOES matter in if-else statements because as soon one conditions is true the rest of the code will not run. 

Switch Statements
    Switch statements take an input and evaluate if it matches a number of cases and run corresponding code blocks. 
    Each code block for each case is ended with a break.
*/
//See the example switch statement below:

var name = "Sarah";

switch (name) {
    case "Susan" :
        console.log("Their name is Susan!");
        break;
    case "Tommy" :
        console.log("Their name is Tommy!");
        break;
    case "Lenny" :
        console.log("Their name is Lenny!");
        break;
    default:
        console.log("We don't know them");

}

//Switch stements are helpful when you have to test a lot of inputs on a lot of cases. They can save time coding!



