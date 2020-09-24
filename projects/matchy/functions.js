/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (array, string) {
    //loop through the animals array
    for (var i = 0; i < array.length; i++){
        //if the name matches the names key in an object
        if (array[i].name === string){
            //return that object
            return array[i];
        }
             
    }   return null; 
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
            //(aniamls, name, replacement)
function replace(animals, name, replacement) {
    //loop through the animals array
    for (var i = 0; i < animals.length; i++){
        //if the name matches the names key in an object
        if (animals[i].name === name){
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function remove(animals, name) {
        //loop through the animals array
    for (var i = 0; i < animals.length; i++){
        //if the name matches the names key in an object
        if (animals[i].name === name){
            //if it matches remove it
            animals.splice([i], 1);
        } 

    } 
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add (animals, animal) {
    //loop through the animals array 
    for (var i = 0; i < animals.length; i++){
         //check has a name not already assigned to any other animal in array
        if (animal.name === animals[i].name) {
            return;
            // check has a name longer than 0, has a species longer than 0,
        }else if (animal.name.length > 0 && animal.species.length > 0) {
          //if all conditions are met add animal to animals array
          animals.push(animal);
    }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
