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
    For in loops are used for gaining access to values in objects and cannot be used for arrays. the loop will pull out each key in the pbject one by one, allowing us access to its corresponding value. 
    The for-in syntax includes a for keyword, followed by the head and body of the loop. Inside the head, included in parentheses, is a variable, a keyword "in" and the object to be looped through. 
    Next, inside curly braces, is the body or statment of the loop. This is the block of code that will run on every key as we gain access with the loop. For-in loops will loop all the way through the object once.
    */
    //Loop over an Object and print the keys
     const object = {1:"value1", 2:"value2", 3:"value3"};
    
    for (let key in object){ //the key variable references each key as it is passed through the loop of the <object> referenced.
        console.log(key); //this is the body or code block of the loop that will execute on every key.
        // ==> will print 1 2 3
        console.log(object[key])
        //==> will print "value1" "value2" "value3"
    };
    
    //The above example loop will pick out each key of the object and print the name of the key and the values to the console.

/*
FOR LOOPS
    For loops are useful when looping through arrays or strings. The syntax consists of a keyword for and in parenthese declared a variable stating where to start 
    the loop. Next there is a condition, which as long as it is still true the loop will continue. There is an incrementor or decrementor. The body of the loop  is 
    held in a code block in curly braces. 
    */
    
    for (let i = 0; i < 100; i++){
        //while i is less than 100 the code below will continue
        console.log(i); // ===> will print 1 2 3 4.....100 to the console
    }    
    
    /*

Loop over an Array, forwards and backwards:
    */
    
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    

    // The for-loop below will start iterating at index 0 and continue until it reached the length of the array printing the values to the console.
    for (let i = 0; i < array.length; i++){ 
        
        console.log(i);
    }
    
    // The for-loop below will start iterating at the end of the array and decrement through to index 0 printing the values in reverse to the console.
    
    for (let i = array.length - 1; i > 0; i--){
        
        console.log(i);
    }
    
    


