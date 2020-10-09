/*
Variables

Declaration and assignment
var, let, const
Hoisting

 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
VAR, CONST, LET

    There are differnt keywords that we can use to declare vaiables including  var, const,  and let. 

VAR 
    Var predates let and const and is less specific in its usage. Var can be used in global scope and 
    can be reassigned after delaration, hoisted, and scoped to functions.*/
    
    var variable = true; //var predates let and const, and can be hoisted and reassigned.
    
/*    
CONST
    Const stands for "constant" and variables declared with the keyworst const cannot change value. In other words 
    to change the value assigned to a const variable you must declare a new variable. They also cannot be hoised but 
    CAN be scoped to functions, and code blocks within loops or conditionals etc. */
    
    const forever = 100; // if this value will never change it is wise to use const. This variable cannot be hoisted. 

/*
LET 
    Let can be reassigned after being declared but cannot be hoisted. Like const, it can be scoped to functions, 
    if blocks and loop blocks. */
    
    let sometimes = "free spirit"; //if this variable is likely to change value it is wise to use let. This variable cannot be hoisted.
    
/*
NOTE: It is best practice to use Let and const whenever possible but many existing programs will still have plenty of 
    var as well so it is wise to be familiar with all of these.
*
*
*
*/