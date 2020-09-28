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
//Should take an object, 
//check if this object has a noises array : conditional- .hasOwnPrperty
//return them as a string separated by a space, : .join(" ")
//if there are no noises return 'there are no noises'

function maybeNoises(object) {
 
     if(object.hasOwnProperty("noises") && object["noises"].length === 0){
        
         return 'there are no noises';
       
     }else if (object.hasOwnProperty("noises")){
         
         return object["noises"].join(" ");    
    
    } else{
         return 'there are no noises';
         
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false

function hasWord(string, word) {

if(string.includes(word)){
    return true;
    
}else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
    
    object["friends"].push(name);
    
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
     //console.log(object.friends);
    //console.log(object["friends"].includes(name));
    //console.log(name)
   
    if(Object.keys(object).length === 0){
        //console.log(false);
        //console.log(object);
        return false;
    }else if (object["friends"].includes(name)){
         return true;
        //console.log(true);
    } else {
        return false;
        //console.log(false);    
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with

//input: name string and array of people objects
//look through the array of objects and 
//acess friends preperty in each object
//output:array of names of NOT friends with name
function nonFriends(name, array) {
    let notFriends = [];
    
    for (var i = 0; i < array.length; i++){
    if(array[i]['name'] !== name && !array[i]['friends'].includes(name)){
        notFriends.push(array[i]['name']);
    }
    }return notFriends;
}
//YOU DID SO GOOD TODAY AND DONT YOUR FORGET IT!!!
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input: Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it.

//var obj ={name:"Sarah", hair: "red"}


function updateObject(object, key, value) {
    
            object[key] = value;
        return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array> 

function removeProperties(object, array) {
    
    for (let key in object){
        if (array.includes(key) && array.length > 0){
            delete object[key];
        }
       
    } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input: Should take an array and 
//remove duplicates
//output: return an array 

function dedup(array) {
    let noDups = [...new Set(array)];

    return noDups;
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