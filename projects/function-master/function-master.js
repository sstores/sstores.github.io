//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  objectValues() : Should take an object and return its values in an array (2, 0, 2)
function objectValues(object) {
    //declare an array
    var array = [];
    //use a for in loop to loop through the array
    for (let key in object){
        //push. object keys into new array
        array.push(object[key]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space (
//i : object
//o: string of keys
function keysToString(object) {
    
    var thing = Object.keys(object);
    
    return thing.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
    
    var valueThing = Object.values(object);
    
    for (var i = 0; i < valueThing.length; i++){
        if (typeof valueThing[i] !== "string"){
        valueThing.splice(i,1);
    }
  
}  return valueThing.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true){
        return "array";
    }else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    //use .split to turn our sting intoan array of string nad set it equal to a new variable
    var splitString = string.split(" ");
    //declare a new array outside the loop
     var newArray = []; 
     //create a for loop to loop through the aray of split strings
    for (var i = 0; i < splitString.length; i++){
      //capitalize each first character, add it back to its word and push it into the new empty array
        newArray.push((splitString[i].charAt(0).toUpperCase()) + (splitString[i].slice(1)));  
        //use .join to return a string of all newArray values put together witha. space
    } return newArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!'
//input: object
//access: key: name
//output: return 'Welcome <Name>!'
function welcomeMessage(object) {
    var valueArray = Object.values(object);
    var Array = [];
    
    Array.push((valueArray[0].charAt(0).toUpperCase()) + (valueArray[0].slice(1)));
    
    return `Welcome ${Array}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>' 
//input: object
//should contain name and species properties
//output: string '<Name> is a <Species>' 
function profileInfo(object) {
    var valueArray = Object.values(object);
    var Array = [];
    for (var i = 0; i < valueArray.length; i++){
        Array.push((valueArray[i].charAt(0).toUpperCase()) + (valueArray[i].slice(1)));
    }

    return `${Array[0]} is a ${Array[1]}`;
   
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a string separated by a space, 
//if there are no noises return 'there are no noises'

function maybeNoises(object) {
    var array = Object.entries(object);
    
    console.log(array);
    

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}