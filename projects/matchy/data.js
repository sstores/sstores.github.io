/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare a variable animal assigned to an empty object 
var animal = {};

//add key value pairs species, name and an empty noises array
animal.species = "feline";
animal["name"] = "Salvador";
animal.noises = [];

//console.log to make sure everythings working
//console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare an empty array named noises
 var noises = [];
 
 //add noises using bracket and dot notations as states in instructions
 noises[noises.length] = "meow";
 noises.push("chirp");
 noises.unshift("purr");
 noises[noises.length] = "snore";
 

// console.log(noises.length);
// console.log(noises[noises.length - 1]);
// console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//connect our noises array with the animals object using bracket? notation
animal.noises = noises;

//add another value to the noises array
noises.push("MEOWWWWW");

//console.log to make sure everything looks good
//console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//decalre an array called animals
var animals = [];

//push our animal object into the animals array
animals.push(animal);


var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

var dog = { species: 'canine', name: 'Rufus', noises: ['woof', 'bark', 'ruff']};
var spider = {species: 'arachnid', name: 'Thelonius Craig', noises: ['scuttle', 'sielnt creep', 'cricket munch']};

animals.push(dog, spider);

//console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I choose an array to hold a list becase they are well-suited for that

var friends = [];

//write a funciton called get random

//input is animals array
function getRandom(array){
    //use array length as max value and use Math.random to find random 
    //Math.floor rounds down to the nearest integer
    return Math.floor(Math.random() * array.length); 
}
    //add the name of the random animal to the friends array
    friends.push(animals[getRandom(animals)].name);
    
    //console.log friends
    console.log(friends);

//Using bracket notation, add the friends list as a property also named friends on one 
//of the animals in the animals array

//add a new key called friends into the animals object
    animals[0].friends = friends; 

    console.log(animals);
    
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}