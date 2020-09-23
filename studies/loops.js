/*
LOOPS
    Loops allow programers to run the same block of code as many times as necessary. Different types of loops are useful for different data types or situations. 

WHILE LOOPS
    While loops contain the keyword whike and a condition held in parentheses. the code block will continue to execute as long as the conditions is true. 
    Be very aware not to cause an infinite loop, it can crash your program! 
*/  
    //declare a starting point
    var count = 0;    
    //while a given condition is true the loop will run and increment at the end
    while (count < 10) {
         // code block to be executed
         console.log(count);
         //this is the incrementor
         count++
    };

 /*   
FOR IN LOOPS
    For in loops are used for looping through objects but should not be used for arrays. 
    */
    //Loop over an Object and print the keys
    var object = {};
    
    for (let key in object){
        console.log(key);
    };
    
    //this will loop through the object and print the keys.

/*
FOR LOOPS
    For loops are useful when looping through arrays or strings. the consist of a keyword for and in parenthese declared a variable stating where to start 
    the loop. Then there is a condition, which as long as it is still true the loop will continue. There is an incrementor or decrementor. The code block is held in curly braces. 
    */
    
    for (let i = 0; i < 100; i++){
        //while i is less than 100 the code below will continue
        console.log(i);
    };    
    
    /*
Be able to loop any number of times, forward counting up to some limit, backward counting down to 0

Loop over an Array, forwards and backwards:
    */
    
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    //loop through the array and print the values in order
    
    for (let i = 0; i < array.length; i++){
        
        console.log(i);
        
    }// this will loop all the way through the array and print the values to the console.
    
    
    //loop through the array and print the values in reverse
    
    
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    for (let i = array.length - 1; i > 0; i--){
        
        console.log(i);
        
    }// this will loop all the way through the array  and print the values in reverse to the console.
    
    


