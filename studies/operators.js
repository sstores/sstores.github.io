/* 
OPERATORS
In general, an operator performs some operation on one or more operand and produces a result. There are several types of operators in javascript.

Assignment operators
    Assignment operators assign value to variables using "=". One common usage for assignment operators is when assigning values to variables.
*/

    let number = 5; //declaring variable number with a value of 5
    number = 17; //assigning a new value to number variable
    
    console.log(number); // will return 17

/*
Arithmetic operators
    Arithmetis operator include the following
    + addition opperator
    - subtraction operator
    * multiplication operator
    / division operator
 */
    console.log(2 + 2); //prints 4
    console.log(2 - 5); //prints -3
    console.log(2 * 5); //prints 10
    console.log(2 / 2); //prints 1
 
 //can be used in more complicated ways
     function sum (op1, op2){
         return op1 + op2;
     }
     sum(2, 2); // function returns 4
     
 /*
Comparison operators
    If statements and loops both 

    Comparison operators are used to compare 2 or more values. 
    <= Less than or equal to
    >= Greater than or equal to
    === strictly equal to
    !== strictly not equal to

*/
  console.log( 2 > 3); // prints false
  console.log( 2 < 3); // prints true  
  console.log( 2 === "2"); //prints false
  console.log( 2 !== "2"); //prints true
  
/*
Logical operators
    Logical operators have to do with making logical presumptions and are often connected with boolean
    
    && AND operator- both conditions must be true to evaluate to true
    || OR operator- either but not both conditions can be true to evaluate to true
    ! BANG operator flips the truthiness of a value or condition
*/
//simple example
console.log(2 > 1 && 2 < 3); //prints true only if BOTH conditions are true

//conditional statement example using logical operator
var x = 2;
if (x > 1 || x < 4){ 
    //if EITHER condition is true the message will print 
    console.log("x might be between 1 and 4");
} 

/*
Unary operators (!, typeOf, -)
    Unlike binary operators (comparison, logical, arithmetic) which require at least 2 operands, Unary opertors only need one operand to work. 
    As an example: 
*/
console.log(typeof 10); //prints number to the console

/*
Ternary operator (a ? b : c)
    There is only one ternary operator in javscript which take 3 operands and is also called a conditional operator. The syntax is as follows:
   */
    //condition ? value1 : value2
     (x > 1 ? 2 : -1);
      //if the consition is true the operator has the value of "value1", otherwise it has the value of "value2".  
    //as defined in hte previous example x = 2 so the console will evaluate this ternary operator to 2

    

